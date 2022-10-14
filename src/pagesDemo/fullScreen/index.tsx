import { View, Image } from "@tarojs/components";
import React from "react";
import NavBar from "../../components/navBar";
import banner_img from "../../assets/img/banner_img.png";
import back_white from "../../assets/img/back_white.png";
import "./index.scss";

function FullScreen() {
  return (
    <View className="fullScreen">
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
