import { Image, View } from "@tarojs/components";
import React from "react";
import { AtFloatLayout } from "taro-ui";
import menu_time from "../../assets/img/menu_time.png";
import "./index.scss";

function Index(props) {
  const {
    isShowMenuPop,
    setIsShowMenuPop,
    setIsShowVoice,
    setIsShowBattery,
    goHome
  } = props;

  return (
    <View className="menu">
      <AtFloatLayout
        isOpened={isShowMenuPop}
        onClose={() => setIsShowMenuPop(false)}
      >
        <View className="menu_pop">
          <View className="menu_title">操作面板</View>
          <View className="menu_content">
            {/* 快速回桩 */}
            <View className="menu_space"></View>
            <View
              className="menu_item"
              onClick={() => {
                goHome();
              }}
            >
              <Image className="menu_image" src={menu_time}></Image>
              <View className="menu_text">快速回桩</View>
            </View>

            <View className="menu_space"></View>
            <View className="menu_item">
              <Image className="menu_image" src={menu_time}></Image>
              <View className="menu_text">定时任务</View>
            </View>

            <View className="menu_space"></View>
            <View className="menu_item">
              <Image className="menu_image" src={menu_time}></Image>
              <View className="menu_text">任务看板</View>
            </View>

            <View className="menu_space"></View>
          </View>
          <View className="menu_content">
            <View className="menu_space"></View>
            <View
              className="menu_item"
              onClick={() => {
                setIsShowVoice(true);
              }}
            >
              <Image className="menu_image" src={menu_time}></Image>
              <View className="menu_text">音量</View>
            </View>

            <View className="menu_space"></View>
            <View
              className="menu_item"
              onClick={() => {
                setIsShowBattery(true);
              }}
            >
              <Image className="menu_image" src={menu_time}></Image>
              <View className="menu_text">电量阈值</View>
            </View>

            <View className="menu_space"></View>
            <View className="menu_item">
              <Image className="menu_image" src={menu_time}></Image>
              <View className="menu_text">关于Robot</View>
            </View>

            <View className="menu_space"></View>
          </View>
        </View>
      </AtFloatLayout>
    </View>
  );
}

export default Index;
