import Taro from "@tarojs/taro";

/**
 * 判断字符串是否为可用值
 * @param str
 * @returns boolean
 */
export function isValid(str): boolean {
  return str !== "" && str !== null && str !== undefined && str !== "undefined";
}

/**
 * 字符串集合转字符串
 * @param strArr
 * @returns str
 */

export function strArrToString(strArr: string[]): string {
  var str = "";
  strArr.map(item => {
    str += `${item}、`;
  });
  return str;
}

/**
 * @function 防抖，直接执行，间隔内防止再执行
 * @param {function} fn  目标的函数
 * @param {number} delay  延迟
 * @param {number} target  this对象
 * @return {function} 包裹后的函数
 */
export function debounce(fn, delay, target) {
  // 定时器，用来 setTimeout
  let timer;
  return function() {
    // 存在timer说明不久前执行了操作
    if (!timer) {
      // 立刻执行，不等的那种
      fn.apply(target, Array.from(arguments));
      // 下面的单纯就是一个切换flag的逻辑
      timer = setTimeout(function() {
        clearTimeout(timer);
        timer = null;
      }, delay);
    } else {
      showTextToast("请勿频繁点击");
    }
  };
}

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
