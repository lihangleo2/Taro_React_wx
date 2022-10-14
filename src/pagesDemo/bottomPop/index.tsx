import { Button, View } from "@tarojs/components";
import React, { useState } from "react";
import { showTextToast } from "../../utils/toastUtils";
import { MenuPop } from "../../components";
import "./index.scss";

function BottomPop() {
  const [isShowMenuPop, setIsShowMenuPop] = useState<boolean>(false);
  function itemClick() {
    showTextToast("item点击");
  }

  return (
    <View>
      <Button
        onClick={() => setIsShowMenuPop(true)}
      >
        点击打开弹窗
      </Button>
      <MenuPop
        isShowMenuPop={isShowMenuPop}
        setIsShowMenuPop={setIsShowMenuPop}
        itemClick={itemClick}
      ></MenuPop>
    </View>
  );
}
definePageConfig({
  navigationBarTitleText: "底部弹窗的使用",
  navigationStyle: "default",
  navigationBarTextStyle: "white",
  navigationBarBackgroundColor: "#FF716F" //导航栏背景颜色
});
export default BottomPop;
