import Taro from "@tarojs/taro";
import { isValid } from "./toolUtil";

//将数据存储在本地缓存中指定的 key 中。会覆盖掉原来该 key 对应的内容。
export function setSp(key, value) {
  try {
    Taro.setStorageSync(key, value)
  } catch (e) {
    console.log("======= setSp =======缓存内容存储报错", e);
  }
}

//从本地缓存中同步获取指定 key 的内容。
export function getSp(key) {
  try {
    var value = Taro.getStorageSync(key)
    if (isValid(value)) {
      return value
    }
  } catch (e) {
    console.log("======= getSp =======缓存内容获取报错", e);
  }
}