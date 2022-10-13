import { Button, View } from "@tarojs/components";
import Taro from "@tarojs/taro";
import { observer } from "mobx-react";
import React from "react";
import { navigateTo } from "../../utils/navigateUtils";
import { PagesPath } from "../../config/pagePath";
import { useStores } from "../../hooks";
import "./index.scss";

function DemoHome() {
  const {
    MyStore: { mobxStr, changeMobxStr },
  } = useStores();


  function setMoxValueAndGo(){
    changeMobxStr("mobx传递的数据")
    navigateTo(PagesPath.valuePass)
  }

  return (
    <View>
      <Button onClick={() => navigateTo(PagesPath.lifeHook)}>
        hook生命周期，函数组件开发介绍
      </Button>
      <Button onClick={() => navigateTo(PagesPath.valuePass)}>
        各种页面间的传值
      </Button>
      {/* mobx类似于全局的单利，当前的MyStore挂载在全局，那么当改变里面的值时，别的地方都能获取到 */}
      <Button onClick={setMoxValueAndGo}>
        mobx实现传值(全局单例)，点击设置值并跳转
      </Button>
      <Button onClick={() => navigateTo(PagesPath.regist)}>跳转注册界面</Button>
      <Button onClick={() => navigateTo(PagesPath.robotlist)}>跳转到扫描机器人列表</Button>
      <Button onClick={() => navigateTo(PagesPath.scanrobot)}>跳转到扫描机器人添加页面</Button>
    </View>
  );
}
definePageConfig({
  navigationBarTitleText: "demo首页",
  navigationStyle: "default",
});
export default observer(DemoHome);
