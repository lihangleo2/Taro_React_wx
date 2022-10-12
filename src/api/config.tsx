export const isDebug = process.env.NODE_ENV === "development";

/**
 * 测试环境: slamtec-psc.oss-cn-hangzhou-internal.aliyuncs.com
 * @returns 返回ossPath
 */
 export function ossPath() {
    return `https://${
      isDebug
        ? "slamtec-psc.oss-cn-hangzhou.aliyuncs.com"
        : "slamtec-psc.oss-cn-hangzhou.aliyuncs.com"
    }`;
  }