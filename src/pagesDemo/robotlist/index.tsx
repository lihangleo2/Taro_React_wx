import { Button, Image, View } from "@tarojs/components";
import React, { useEffect } from "react";
import { AtSwipeAction } from "taro-ui";
import Taro, { usePullDownRefresh, useReachBottom } from "@tarojs/taro";
import classNames from "classnames";
import { showTextToast, showToast } from "../../utils/toastUtils";
import path_select from "../../assets/img/path_select.png";
import path_no_select from "../../assets/img/path_no_select.png";
import "./index.scss";

/**
 * 发现机器人--多个机器人列表页(保存后)
 * @returns
 */
function RobotList() {
  //列表
  const routeList = [
    {
      itinerary_id: 0,
      name: "茶水间消毒方案",
      style: "Vista-v5",
      enable: true
    },
    {
      itinerary_id: 1,
      name: "会议室消毒方案",
      style: "Vista-v5",
      enable: false
    },
    {
      itinerary_id: 2,
      name: "全公司消毒方案",
      style: "Vista-v5",
      enable: false
    }
  ];

  usePullDownRefresh(() => {
    console.log("====================================");
    console.log("触发了下拉刷新");
    console.log("====================================");
    //Taro停止下拉动作
    // Taro.stopPullDownRefresh()
  });

  useReachBottom(() => {
    console.log("====================================");
    console.log("触发了上拉加载");
    console.log("====================================");
  });

  //点击删除消杀线路设置
  function clickDeleteRoteList(option, btnIndex, item) {
    showTextToast(`点击的id ===> ${item.itinerary_id}`);
  }

  return (
    <View className="robotlist">
      {routeList.map((item, index) => (
        <AtSwipeAction
          autoClose
          onClick={(option, btnIndex) => {
            clickDeleteRoteList(option, btnIndex, item);
          }}
          key={item.itinerary_id}
          maxDistance={80}
          areaWidth={Taro.getSystemInfoSync().windowWidth}
          options={[
            {
              text: "删除",
              style: {
                backgroundColor: "#EB5545",
                justifyContent: "center",
                width: "80px",
                padding: 0
              }
            }
          ]}
        >
          <View key={item.itinerary_id} className="item_layout">
            <View>
              <View className="title_name">{item.name}</View>
              <View className="title_content">消杀模式：巡游消毒/巡游2次</View>
              <View className="title_content">消毒路线：茶水间、会议室</View>
            </View>

            <View className="setting_layout">
              <Image
                className="setting_image"
                src={item.enable ? path_select : path_no_select}
              ></Image>
              <View
                className={classNames(
                  item.enable ? "text_selected" : "text_select"
                )}
              >
                {item.enable ? "当前默认配置" : "设为默认配置"}
              </View>
            </View>
          </View>
        </AtSwipeAction>
      ))}
    </View>
  );
}

definePageConfig({
  navigationBarTitleText: "列表页全展示",
  navigationBarTextStyle: "white",
  navigationBarBackgroundColor: "#FF716F", //导航栏背景颜色
  enablePullDownRefresh: true,
  onReachBottomDistance: 50
});
export default RobotList;
