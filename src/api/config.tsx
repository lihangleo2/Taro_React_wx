export const isDebug = process.env.NODE_ENV === "development";

/**
 * baseUrl:
 * 1、使用命令 npm run dev:weapp 则会用测试环境
 * 2、使用命令 npm run build:weapp 则会使用正式环境
 */
export function baseUrl() {
  return isDebug
    ? "https://console-test.com/"
    : "https://console.com/";
}



/**
 * 这里是获取小程序中使用图片的快速操作
 */
 export function ossPath() {
    return `https://${
      isDebug
        ? "slamtec-psc.oss-cn-hangzhou.aliyuncs.com"
        : "slamtec-psc.oss-cn-hangzhou.aliyuncs.com"
    }`;
  }


  /**
   * 这里放我们接口文档url
   */
  export const Api = {
    refresh: "core/system/v1/refresh",
    login: "core/system/v1/login",
   
  };