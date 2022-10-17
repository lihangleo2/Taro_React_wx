import { Button, View } from "@tarojs/components";
import Taro from "@tarojs/taro";
import {
  hideLoading,
  showActionSheet,
  showLoading,
  showModal,
  showTextToast,
  showToast,
} from "../../utils/toastUtils";
import "./index.scss";

function ToastUi() {
  function testAbout() {
    showModal("提示", "这是真的吗？", confirmTest, undefined);
  }

  function confirmTest() {
    showTextToast("我点击了确定");
  }

  function showMyLoading() {
    showLoading("加载中");
    setTimeout(function () {
      hideLoading();
    }, 3000);
  }

  function showMyActionSheet() {
    showActionSheet(["A", "B"],selectWitch,undefined);
  }

  function selectWitch(value) {
    showTextToast("我点击了第几个====>"+value);
  }



  return (
    <View>
      <Button className="button_margin" onClick={() => showToast("成功了", 1)}>
        显示成功
      </Button>
      <Button
        className="button_margin"
        onClick={() => showTextToast("纯文字的显示")}
      >
        显示纯文字
      </Button>

      <Button className="button_margin" onClick={() => testAbout()}>
        显示模态弹窗(即android的dialog)
      </Button>
      <Button className="button_margin" onClick={() => showMyLoading()}>
        显示加载loading
      </Button>
      <Button className="button_margin" onClick={() => showMyActionSheet()}>
        显示ActionSheet
      </Button>
    </View>
  );
}
definePageConfig({
  navigationBarTitleText: "toast的一些用法",
  navigationStyle: "default",
  navigationBarTextStyle: "white",
  navigationBarBackgroundColor: "#FF716F", //导航栏背景颜色
});
export default ToastUi;
