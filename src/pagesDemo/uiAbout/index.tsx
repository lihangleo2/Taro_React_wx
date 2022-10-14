import { Button, View, Image } from "@tarojs/components";
import React, { useRef, useState } from "react";
import classNames from "classnames";
import login_show_pwd from "../../assets/img/login_show_pwd.png";
import login_show_text from "../../assets/img/login_show_text.png";
import "./index.scss";

function UiAbout() {
  const [enable, setEnable] = useState<boolean>(false);
  const enableRef = useRef<boolean>(false);

  function changeEnable() {
    enableRef.current = !enableRef.current;
    setEnable(enableRef.current);
  }

  return (
    <View className='uiAbout'>
      <Button onClick={changeEnable}>点击切换，true or false</Button>
      <View className='text_title_second'>1、以下类似Android中的select</View>
      <View className={classNames(enable ? "select_true" : "select_false")}>
        {enable ? "当前默认配置" : "设为默认配置"}
      </View>

      <View className='text_title_second'>2、图片的select</View>
      <Image
        className='image'
        src={enable ? login_show_text : login_show_pwd}
      ></Image>

      <View className='text_title_second'>3、ui里判断，true才显示</View>
      {enable && (
        <View>
          <View>我为ture时才展示出来！！</View>
        </View>
      )}

      <View className='text_title_second'>
        4、ui里判断，true展示true的页面，false展示false的页面
      </View>
      {enable ? (
        <View>
          <View>这是ture...true的页面</View>
        </View>
      ) : (
        <View>
          <View>这是false...false的页面</View>
        </View>
      )}

      {/* 菜鸟教程的一些css学习https://m.runoob.com/css3/ */}
      <View className='text_title_second'>5、按钮按压的更换样式，类似onPress</View>
      <View className='button_style'>我是button样式</View>
    </View>
  );
}
definePageConfig({
  navigationBarTitleText: "ui界面里的一些用法",
  navigationStyle: "default",
  navigationBarTextStyle: "white",
  navigationBarBackgroundColor: "#FF716F", //导航栏背景颜色
});
export default UiAbout;
