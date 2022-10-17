import { Button, View } from "@tarojs/components";
import { getCurrentInstance, getCurrentPages, useDidShow, useRouter } from "@tarojs/taro";
import React, { useState } from "react";
import { spKey } from "../../config/spKey";
import { getSp } from "../../utils/storageUtil";
import { navigateBack } from "../../utils/navigateUtils";
import "./index.scss";

function ValuePassSon() {
  const [passStr, setPassStr] = useState<string>("");
  const [passStrbyUrl, setPassStrbyUrl] = useState<string>("");
  const [passStrbyStore, setPassStrbyStore] = useState<string>("");

  /**
   * 【1】获取父页面传递来的数据(通过Taro事件)
   */
  useDidShow(() => {
    var pages = getCurrentPages();
    const current = pages[pages.length - 1];
    const event = current.getOpenerEventChannel();
    event.on("testLeo", (params) => {
      console.log("------- 获取到的数据 -------");
      console.log(params);
      setPassStr(params.data);
    });
  });

  


  /**
   * 【2】向父页面传递数据(通过Taro事件)
   */
  function passToFather(){
    var pages = getCurrentPages();
    const current = pages[pages.length - 1];
    const event = current.getOpenerEventChannel();
    event.emit('acceptDataFromOpenedPage', { keyData: '子页面数据', value: { test: "123" } });
    navigateBack()
  }

  /**
   * 【3】获取url传递来的参数有2种：
   * 3.1、通过getCurrentInstance主动获取
   */
  function getValueFromFather(){
    const { router } = getCurrentInstance();
    console.log(router?.params.taskId) 
    setPassStrbyUrl(router?.params.taskId+"")
  }

  //3.2、通过useRouter获取如下。但这种必须写在react组件里不能写在方法里。
  const router = useRouter();
  console.log(router?.params.taskId) 


  /**
   * 【4】向父页面传递数据
   */
  function passToFatherByUrl(){
    let pages = getCurrentPages()
    let prevPage = pages[pages.length - 2]
    prevPage.setData({ keyData: '子页面传递的数据by url', value: { test: "123" } })
    navigateBack()
  }


  /**
   * 【5】获取父页面存储值传递的数据
   */
  function getPassValueByStore(){
    setPassStrbyStore(getSp(spKey.passValue))
  }

  return (
    <View className="valuePassSon">
      <View className="text_title">1、获取父页面传递的数据(通过Taro事件)</View>
      <View className="text_content">
        获取到的数据：{passStr}
      </View>
      <Button className="button_margin" onClick={passToFather}>2、向父页面传递数据(通过Taro事件)</Button>
      <Button className="button_margin" onClick={getValueFromFather}>3、点击：获取父页面传递的数据(url方式)</Button>
      <View className="text_content">
        获取到的数据：{passStrbyUrl}
      </View>
      <Button className="button_margin" onClick={passToFatherByUrl}>4、向父页面传递数据(url方式)</Button>
      <Button className="button_margin" onClick={getPassValueByStore}>5、点击获取存储值：{passStrbyStore}</Button>
    </View>
  );
}
definePageConfig({
  navigationBarTitleText: "数据传递子页面",
  navigationStyle: "default",
  navigationBarTextStyle: "white",
  navigationBarBackgroundColor: "#FF716F", //导航栏背景颜色
});
export default ValuePassSon;
