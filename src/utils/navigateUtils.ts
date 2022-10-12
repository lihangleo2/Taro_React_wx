import Taro from "@tarojs/taro";

/**
 * 本页Taro文档
 * https://taro-docs.jd.com/docs/apis/route/navigateTo
 */

//返回上页
export function navigateBack() {
  Taro.navigateBack({ delta: 1 });
}

//跳转到TabBar页面，并关闭其他非TabBar页面
export function switchTab(path: string) {
  Taro.switchTab({
    url: path,
  });
}

//关闭所有页面，打开到应用内的某个页面(可以做类似退出登录的操作)
export function reLaunch(path: string) {
  Taro.reLaunch({
    url: path,
  });
}

//关闭当前页面，跳转另一个页面(但不允许是tabbar页面)
export function redirectTo(path: string) {
  Taro.redirectTo({
    url: path,
  });
}

//保留当前页面跳转(但不允许是tabbar页面),小程序页面栈最多10层，注意
export function navigateTo(path: string) {
  Taro.navigateTo({
    url: path,
  });
}




