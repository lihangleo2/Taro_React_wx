import React, { useEffect, useState } from "react";
import { AtFloatLayout } from "taro-ui";
import { PickerView, PickerViewColumn, View } from "@tarojs/components";
import { batteryRangeList } from "../../model/common.model";
import "./index.scss";

function SpeedUpdatePop(props) {
  const {
    currentBattery,
    isShowBattery,
    setIsShowBattery,
    handleBatteryLevel,
  } = props;
  //操作pop暂时选中的位置
  const [currentBatteryIndex, setCurrentBatteryIndex] = useState<number>(0);
  //第一次真正选中的，以防取消时重新选中他
  const [lastIndex, setLastIndex] = useState<number>(0);

  useEffect(() => {
    setCurrentBatteryIndex(currentBattery);
    setLastIndex(currentBattery);
  }, [currentBattery]);

  function cancleBattery() {
    setIsShowBattery(false);
    setCurrentBatteryIndex(lastIndex);
  }

  function confirmBattery(index) {
    setIsShowBattery(false);
    handleBatteryLevel(index)
  }

  return (
    <AtFloatLayout
      isOpened={isShowBattery}
      className="speed_pop"
      onClose={() => cancleBattery()}
    >
      <View className="speed_pop_title">
        <View
          className="speed_pop_title_cancel"
          onClick={() => cancleBattery()}
        >
          取消
        </View>
        <View className="speed_pop_title_title">电量阈值</View>
        <View
          className="speed_pop_title_confirm"
          onClick={() => confirmBattery(currentBatteryIndex)}
        >
          确定
        </View>
      </View>
      <View className="speed_pop_content">
        <PickerView
          immediateChange
          indicatorStyle="height: 50px;"
          style="width: 100%; height: 200px; text-align:center;"
          value={[currentBatteryIndex]}
          onChange={e => {
            setCurrentBatteryIndex(e.detail.value[0]);
          }}
        >
          <PickerViewColumn style="line-height: 50px;">
            {batteryRangeList.map(item => {
              return <View key={item}>{item}</View>;
            })}
          </PickerViewColumn>
        </PickerView>
      </View>
    </AtFloatLayout>
  );
}

export default SpeedUpdatePop;
