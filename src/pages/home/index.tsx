import { View } from "@tarojs/components";
import './index.scss'

function Home() {
  return (
    <View className='home'>
      <View className='navigation_divide'></View>
      <View>首页--toolbar下有个阴影</View>
    </View>
  );
}
definePageConfig({
  navigationBarTitleText: "首页",
  navigationStyle: "default",
});
export default Home;
