import { Button, View } from "@tarojs/components";
import Taro, { getCurrentPages, useDidShow } from "@tarojs/taro";
import React, { useState } from "react";
import { navigateTo } from "../../utils/navigateUtils";
import { PagesPath } from "../../config/pagePath";
import "./index.scss";

function ValuePass() {

  const[sonPassValue,setSonPassValue] = useState<string>()
  const[sonPassValueByUrl,setSonPassValueByUrl] = useState<string>()


  /**
   * 传递和接收数据
   *  */
  function valuePassByTaro() {
    Taro.navigateTo({
      url: PagesPath.valuePassSon,
      events: {
        //【2】获取子页面传递来的数据(通过Taro事件)
        acceptDataFromOpenedPage: function (data) {
          console.log("被打开页面传送到当前页面的数据");
          console.log(data);
          setSonPassValue(data.keyData)
        },
      },
      success: function (res) {
        //【1】向子页面传值(通过Taro事件)
        res.eventChannel.emit("testLeo", { data: "test" });
      },
    });
  }


  /**
   * 【3】向子页面传值(通过url)
   */
  function valuePassByUrl(){
    navigateTo(`${PagesPath.valuePassSon}?isFromTimer=true&taskId=32`)
  }

  useDidShow(()=>{
    var pages = getCurrentPages();
    const current = pages[pages.length - 1];
    const data = current.data
    setSonPassValueByUrl(data.keyData)
    console.log('===============我是这种方式=====================');
    console.log(data.keyData);
    console.log('====================================');
  })


  return (
    <View className='valuePass'>
      <Button onClick={valuePassByTaro}>1、向子页面传值(通过Taro事件)</Button>
      <View className='text_title_second'>2、获取子页面传递的数据(通过Taro事件)</View>
      <View className='text_content'>
        获取到的数据：{sonPassValue}
      </View>
      <Button className='button_margin' onClick={valuePassByUrl}>3、向子页面传值(通过url)</Button>
      <View className='text_title_second'>4、获取子页面传递的数据(通过url)</View>
      <View className='text_content'>
        获取到的数据：{sonPassValueByUrl}
      </View>
    </View>
  );
}
definePageConfig({
  navigationBarTitleText: "数据传递父页面",
  navigationStyle: "default",
  navigationBarTextStyle: "white",
  navigationBarBackgroundColor: "#FF716F", //导航栏背景颜色
});
export default ValuePass;
