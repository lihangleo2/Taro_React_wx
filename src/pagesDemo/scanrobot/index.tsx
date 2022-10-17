import { Image, Input, View } from '@tarojs/components';
import "./index.scss";

/**
 * 发现新机器--(场景名称和机器名称)
 * @returns 
 */
function FindNewRobot() {
  
  const login_show_pwd ="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAMAAAApB0NrAAAANlBMVEUAAADPz8/MzMzPz8/Ly8vMzMzPz8/MzMzMzMzLy8vMzMzMzMzMzMzMzMzNzc3Nzc3Nzc3MzMwwGUIqAAAAEXRSTlMAMPAggKAQP+DP0LBQwGB/bwOyYe4AAADKSURBVDjL1VNbEoQgDLMFeSty/8tuXe1UYBmd/TNfETNJC+30foBNOVkY/jfbguUALpv5oVBzqTGr1iOXHtlUJp7PQ9Qx8Ie/WAGKf5WL0EowTYwVWdS4pKN7+IrY6XD2HETcOiJuV3Gc3yWaK1QkOSmJFB9r6pqTAundyR3xwGmGbCQKShGjKEZOKEUx7KUGJzQOfaQe39TjpZ4nfUkDM3Ho7md5es8iwnXwXrfvzlAyMjFHGSZVzaEuHVCb+3n+Zy9kv/S+X6/HB/+jHfqJkt6AAAAAAElFTkSuQmCC"
  const image_next ="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAWCAMAAADD5o0oAAAAOVBMVEUAAAD/bWz/bW3/a2n/cG7/bmv/bmv/bWv/b2z/bGz/bWv/aWn/Z2f/bGz/dGj/cXH/bW38Xl38YF+K6YckAAAAEXRSTlMA8Cfw/VjczVpXxWQ+LRYSB9Iyk7MAAAA5SURBVBjTY+BhE2CAA3YhRiY4h4lRkK48PmYhdjiHRZCZF4nNgYPNSi6bS4iZE24ZNxuQDQf8CCYAU6sCaAu1ZQUAAAAASUVORK5CYII="

  return (
    <View className="scanrobot">
      <View className="layout_container">
        <View className="item_fist_line">
          <Image
            src={login_show_pwd}
            className="image_robot"
          ></Image>
          <View className="right_layout">
            <View className="text_bold">
              卡冈图雅·灵柩系列消杀机器人
            </View>

            <View className="space"></View>
            <View className="text_style">
              型号:Vista - v5
            </View>

            <View className="tag_style">
              经济版
            </View>
          </View>
        </View>

        <View className="input_margin">
          场景名称：
          <View className="input">
            <Input className="width" placeholder="场景名称" disabled onClick={()=>{console.log("111111")}}>
            </Input>
            <Image className="image" src={image_next}></Image>
          </View>
          <View className="remind_text">您希望机器放置的位置，如：虹桥机场C区</View>
        </View>

        <View className="input_margin">
          机场名称：
          <View className="input">
            <Input className="width" placeholder="填写机器名">
            </Input>
            <Image className="image" src={image_next}></Image>
          </View>
          <View className="remind_text">小名，如：C区老二</View>
        </View>


      </View>
    </View>
  )
}
definePageConfig({
  navigationBarTitleText: '发现新机器',
  navigationBarTextStyle: "white",
  navigationBarBackgroundColor: "#FF716F", //导航栏背景颜色
});
export default FindNewRobot;