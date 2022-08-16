import { Image, View } from '@tarojs/components'
import React, { useEffect } from 'react';
import Taro, { usePullDownRefresh, useReachBottom } from '@tarojs/taro';
import { showTextToast } from "../../utils/toolUtil";
import "./index.scss";


/**
 * 发现机器人--多个机器人列表页(保存后)
 * @returns 
 */
function RobotList() {

  const login_show_pwd ="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAMAAAApB0NrAAAANlBMVEUAAADPz8/MzMzPz8/Ly8vMzMzPz8/MzMzMzMzLy8vMzMzMzMzMzMzMzMzNzc3Nzc3Nzc3MzMwwGUIqAAAAEXRSTlMAMPAggKAQP+DP0LBQwGB/bwOyYe4AAADKSURBVDjL1VNbEoQgDLMFeSty/8tuXe1UYBmd/TNfETNJC+30foBNOVkY/jfbguUALpv5oVBzqTGr1iOXHtlUJp7PQ9Qx8Ie/WAGKf5WL0EowTYwVWdS4pKN7+IrY6XD2HETcOiJuV3Gc3yWaK1QkOSmJFB9r6pqTAundyR3xwGmGbCQKShGjKEZOKEUx7KUGJzQOfaQe39TjpZ4nfUkDM3Ho7md5es8iwnXwXrfvzlAyMjFHGSZVzaEuHVCb+3n+Zy9kv/S+X6/HB/+jHfqJkt6AAAAAAElFTkSuQmCC"
  //列表
  const tabList = [
    {
      id: 1,
      text: "列表测试1",
      style: "Vista-v5",
    },
    {
      id: 2,
      text: "列表测试2",
      style: "Vista-v5",
    },
    {
      id: 3,
      text: "游戏3",
      style: "Vista-v5",
    },
  ]
  //对象
  const tabBean = {
    color: "#B7B7B7",
    selectedColor: "#FF716F",
    list: [
      {
        text: "游戏1",
      },
      {
        text: "游戏2",
      },
      {
        text: "游戏3",
      },
    ],
  };

  usePullDownRefresh(() => {
    console.log('====================================');
    console.log("触发了下拉刷新");
    console.log('====================================');
    //Taro停止下拉动作
    // Taro.stopPullDownRefresh()
  })

  useReachBottom(() => {
    console.log('====================================');
    console.log("触发了上拉加载");
    console.log('====================================');
  })

  return (
    <View className='robotlist'>
      <View className='layout_container'>
        <View className='scanBtn_robot' onClick={() => showTextToast("被点击了！")}>
          <Image className='image' src={login_show_pwd} ></Image>
          添加新机器人
        </View>
        <View className='list_layout'>
          {
            tabList.map(item => (
              <View className='list_item' key={item.id}>
                <View className='item_fist_line'>
                  <Image
                    src={login_show_pwd}
                    className='image_robot'
                  ></Image>
                  <View className='right_layout'>
                    <View className='text_bold'>
                      {item.text}
                    </View>

                    <View className='space'></View>
                    <View className='text_style'>
                      型号:{item.style}
                    </View>

                    <View className='tag_layout'>
                      <View className='tag_style'>
                        经济版
                      </View>
                      <View className='tag_style_right'>
                        机场_A区
                      </View>
                    </View>
                  </View>
                </View>
                <View className='item_second_line'>
                  <View className='tag_bottom_style'>
                    <Image className='image_tag' src={login_show_pwd} ></Image>
                    在线
                  </View>

                  <View className='tag_bottom_style_middle'>
                    <Image className='image_tag' src={login_show_pwd} ></Image>
                    30%
                  </View>

                  <View className='tag_bottom_style'>
                    <Image className='image_tag' src={login_show_pwd} ></Image>
                    低
                  </View>

                </View>

              </View>
            ))
          }
        </View>
      </View>
    </View>
  )
}

definePageConfig({
  navigationBarTitleText: '发现机器人',
  navigationBarTextStyle: "white",
  navigationBarBackgroundColor: "#FF716F", //导航栏背景颜色
  "enablePullDownRefresh": true,
  onReachBottomDistance: 50
});
export default RobotList;


