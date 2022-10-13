import Taro from "@tarojs/taro";
import { doRefreshToken } from "../action/login";
import fetch from "../api/request";
import { PagesPath } from "../config/pagePath";
import { spKey } from "../config/spKey";
import { reLaunch } from "../utils/navigateUtils";
import { Api, baseUrl } from "./config";

let chainBuffer = [] as any[];
let refreshTag = 0;

export const refreshInterceptor = chain => {
  const requestParams = chain.requestParams;
  const { method, data, url } = requestParams;
  return chain.proceed(requestParams).then(res => {
    //如果token失效
    if (res.statusCode === 401 && refreshTag === 0) {
      refreshTag = refreshTag + 1;
      //如果存储的Buffer里没有这些值，就存进Buffer里，有了就忽略。刷新token后，继续去请求未成的接口
      chainBuffer = chainBuffer.filter(item => {
        return item.url !== url || item.method !== method || item.data !== data;
      });
      //以下判断是，登录或刷新token的接口不存进Buffer里。
      if (
        url !== baseUrl() + Api.refresh &&
        url !== `${baseUrl()}${Api.login}`
      ) {
        chainBuffer.push(requestParams);
        console.log("=======================>chainBuffer", chainBuffer);
        refreshToken();
      }
    }
    return res;
  });
};

/**
 * 刷新token操作操作
 */
const refreshToken = (): void => {
  doRefreshToken()
    .then(res => {
      console.log("---------------------------> 刷新token");
      //HACK 同步会导致一直刷新的问题，故使用异步防止未写入重复请求刷新
      Taro.setStorage({
        key: spKey.loginModel,
        data: res,
        success: function() {
          chainBuffer.map(item => {
            fetch({
              url: item.url,
              method: item.method,
              isCors: true,
              payload: item.data,
            });
          });
          chainBuffer = [];
          refreshTag = 0;
        },
        fail: () => {
          console.log("---------------------------> 更改token失败");
        },
      });
    })
    .catch(() => {
      console.log("--------->>>刷新token失败，跳转登录页面000001");
      Taro.removeStorage({
        key: spKey.loginModel,
        success: function() {
          console.log("--------->>>刷新token失败，跳转登录页面000002");
          reLaunch(PagesPath.login);
          refreshTag = 0;
        },
        fail: function() {
          console.log("--------->>>刷新token失败，跳转登录页面000003");
        },
      });
    })
    .finally(() => {
      Taro.hideLoading();
      console.log("--------->>>刷新token失败，跳转登录页面000004");
    });
};
