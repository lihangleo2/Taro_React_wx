import { Button, View } from "@tarojs/components";
import React from "react";
// import { onRobotStage } from "src/action/login";
import { onRobotStage } from "../../action/login";
import "./index.scss";

function NetWork() {
  function getRobotStatus() {
    onRobotStage()
      .then((res) => {
        if (res.code === "1") {
          //   setSp(spKey.V5TaskId, res.data.disinfectant_task_id);
          //   console.log(res.data.is_on_dock);
        }
      })
      .catch((err) => {
        //封装的fetch里有统一操作注意
        // showTextToast("机器状态请求失败");
        // showTextToast("机器状态不稳定");
      });
  }

  return (
    <View>
      <Button
        onClick={getRobotStatus}
      >
        点击进行联网操作()
      </Button>
    </View>
  );
}
definePageConfig({
  navigationBarTitleText: "网络连接的一些用法",
  navigationStyle: "default",
  navigationBarTextStyle: "white",
  navigationBarBackgroundColor: "#FF716F", //导航栏背景颜色
});
export default NetWork;
