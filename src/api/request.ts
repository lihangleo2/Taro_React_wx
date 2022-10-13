import Taro from "@tarojs/taro";
import { spKey } from "../config/spKey";
import { HeaderProps, OptionsModel, Response } from "../model/login.model";
import { getSp } from "../utils/storageUtil";
import { isValid } from "../utils/stringUtils";
import { baseUrl } from "./config";
import { refreshInterceptor } from "./interceptor";

/**
 * @param options.url Url
 * @param options.payload Params
 * @param options.mockData  mockdata
 * @param options.method  POST | GET
 * @param options.isCors  是否跨域
 * @param options.showLoading  Loading?
 */
async function fetch(options: OptionsModel): Promise<any> {
  const {
    url,
    payload,
    method = "GET",
    isCors,
    showLoading,
    customHeaders = {},
    defaultFormat = true,
    autoHideLoading = true,
  } = options;
  if (showLoading) {
    Taro.showLoading({
      title: "加载中",
    });
  }
  const header = { ...getAuth(), ...customHeaders };
  let paramsWithTimestamp = payload;
  // paramsWithTimestamp = { ...paramsWithTimestamp };

  if (method.toUpperCase() === "POST") {
    header["Content-Type"] = defaultFormat
      ? "application/x-www-form-urlencoded"
      : "application/json";
  }
  if (isValid(customHeaders["Content-Type"])) {
    header["Content-Type"] = customHeaders["Content-Type"];
  }
  if (header && header.authorization === "") {
    delete header.authorization;
  }
  Taro.addInterceptor(refreshInterceptor);
  return Taro.request({
    url: `${isCors ? "" : baseUrl()}${url}`,
    method,
    data: paramsWithTimestamp,
    header: {
      ...header,
    },
  })
    .then((res: Response<any>) => {
      if (autoHideLoading) {
        Taro.hideLoading();
      }
      debugger;
      Taro.stopPullDownRefresh();
      return res.statusCode === 200
        ? Promise.resolve(res.data)
        : Promise.reject(res);
    })
    .catch(err => {
      console.error(`
接口请求报错：                       
===============================================================================================================
    报错接口：${isCors ? "" : baseUrl()}${url}  
    请求时间：${err.data.timestamp?.replace("T", " ")}
    异常状态：${err.statusCode}
    异常信息：${JSON.stringify(err.data)
      .replace(RegExp(",", "g"), "\n\t\t\t")
      .replace("{", "")
      .replace("}", "")}
===============================================================================================================
    `);
      return Promise.reject(`${err.statusCode}`);
    });
}

//如果登录有信息的话，下次登录，在头部加上token
export const getAuth = (): HeaderProps => {
  let header: HeaderProps = {
    "Access-Control-Request-Method": "GET",
  };
  if (isValid(getSp(spKey.loginModel))) {
    header["authorization"] = `Bearer ${getSp(spKey.loginModel).access_token}`;
  }
  return header;
};

export default fetch;
