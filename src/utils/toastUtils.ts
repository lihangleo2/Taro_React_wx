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
    icon: model === 1 ? "success" : "error",
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
 * 模态弹窗
 */
export function showModal(
  title: string,
  content: string,
  confirmFun,
  cancleFun
) {
  return Taro.showModal({
    title: title,
    content: content,
    success: function (res) {
      if (res.confirm) {
        if (confirmFun instanceof Function) {
          confirmFun();
        }
      } else if (res.cancel) {
        if (cancleFun instanceof Function) {
          cancleFun();
        }
      }
    },
  });
}

export function showLoading(loadingMsg: string) {
  return Taro.showLoading({
    mask: true,
    title: loadingMsg,
  });
}

export function hideLoading() {
  return Taro.hideLoading();
}

/**
 * 一个底部的选择框：有点类似android底部弹出的是，拍摄 or 相册
 */
export function showActionSheet(
  list: string[],
  confirmFun,
  cancleFun
) {
  return Taro.showActionSheet({
    itemList: list,
    success: function (res) {
      if (confirmFun instanceof Function) {
        confirmFun(res.tapIndex);
      }
    },
    fail: function (res) {
      if (cancleFun instanceof Function) {
        cancleFun();
      }
    },
  });
}
