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
    MyStore: { mobxStr, changeMobxStr }
  } = useStores();

  function setMoxValueAndGo() {
    changeMobxStr("mobx传递的数据");
    navigateTo(PagesPath.valuePass);
  }

  return (
    <View className="home">
      <Button
        className="button_text"
        onClick={() => navigateTo(PagesPath.lifeHook)}
      >
        hook生命周期，函数组件开发介绍
      </Button>
      <Button
        className="button_text"
        onClick={() => navigateTo(PagesPath.valuePass)}
      >
        各种页面间的传值
      </Button>
      {/* mobx类似于全局的单利，当前的MyStore挂载在全局，那么当改变里面的值时，别的地方都能获取到 */}
      <Button className="button_text" onClick={setMoxValueAndGo}>
        mobx实现传值(全局单例)，点击设置值并跳转
      </Button>
      <Button
        className="button_text"
        onClick={() => navigateTo(PagesPath.regist)}
      >
        跳转注册(是否显示密码，验证码倒计时等用法)
      </Button>
      <Button
        className="button_text"
        onClick={() => navigateTo(PagesPath.robotlist)}
      >
        跳转列表(列表的所有用法)
      </Button>
      <Button
        className="button_text"
        onClick={() => navigateTo(PagesPath.scanrobot)}
      >
        跳转input的一些用法
      </Button>
      <Button
        className="button_text"
        onClick={() => navigateTo(PagesPath.toastUi)}
      >
        showToast的用法
      </Button>
      <Button
        className="button_text"
        onClick={() => navigateTo(PagesPath.network)}
      >
        联网的一些操作
      </Button>
      <Button
        className="button_text"
        onClick={() => navigateTo(PagesPath.uiAbout)}
      >
        一些ui里的判断和用法
      </Button>
      <Button
        className="button_text"
        onClick={() => navigateTo(PagesPath.bottomPop)}
      >
        底部弹窗的使用
      </Button>
      <Button
        className="button_text"
        onClick={() => navigateTo(PagesPath.selectPop)}
      >
        选择弹窗的使用
      </Button>

      <Button
        className="button_text"
        onClick={() => navigateTo(PagesPath.fullScreen)}
      >
        全屏的使用
      </Button>
    </View>
  );
}
definePageConfig({
  navigationBarTitleText: "demo首页",
  navigationStyle: "default"
});
export default observer(DemoHome);
