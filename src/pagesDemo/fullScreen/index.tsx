import { View, Image } from "@tarojs/components";
import React from "react";
import NavBar from "../../components/navBar";
import banner_img from "../../assets/img/banner_img.png";
import back_white from "../../assets/img/back_white.png";
import "./index.scss";

function FullScreen() {
  return (
    <View className="fullScreen">
      {/* 自定义状态栏的使用：
      1、这里具体的使用是，全透明状态栏的使用
      2、当然也可以不是全屏及全透明状态的用法 */}
      <NavBar
        title="透明状态栏的使用"
        isTransparent
        leftIcon={back_white}
      ></NavBar>
      <View>
      <Image className="image" mode="heightFix" src={banner_img}></Image>
      </View>
    </View>
  );
}
definePageConfig({
    usingComponents: {},
    navigationStyle: "custom",
});
export default FullScreen;
