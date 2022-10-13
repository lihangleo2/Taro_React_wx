import Taro from "@tarojs/taro";

/**
 * toast显示
 * @param str  显示文字
 * @param model  显示succeed 还是 error
 * @returns
 */
export function showToast(str: string, model: number = 0) {
  return Taro.showToast({
    title: str,
    icon: model === 0 ? "success" : "error",
    duration: 2000,
  });
}

/**
 * toast显示
 * @param str  显示文字
 * @returns
 */
export function showTextToast(str: string) {
  return Taro.showToast({
    title: str,
    icon: "none",
    duration: 2000,
  });
}

/**
 * 轻提示
 * @param str  显示文字
 * @param model  显示succeed 还是 error
 * @returns
 */
export function showMessage(str: string, level: number = 0) {
  var type: "info" | "success" | "error" | "warning" = "info";
  switch (level) {
    case 0:
      type = "info";
      break;
    case 1: //成功消息
      type = "success";
      break;
    case 2:
      type = "error";
      break;
    case 3:
      type = "warning";
      break;
  }
  return Taro.atMessage({
    message: str,
    type: type,
  });
}

export function LogDebug(...str) {
  console.log("==================DEBUG==================");
  console.log(str);
  console.log("=========================================");
}

export function LogInfo(...str) {
  console.log("==================INFO==================");
  console.log(str);
  console.log("=========================================");
}

export function LogERROR(...str) {
  console.log("==================ERROR==================");
  console.log(str);
  console.log("=========================================");
}
