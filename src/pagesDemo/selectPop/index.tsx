import { Button, View} from '@tarojs/components'
import React, { useState } from 'react'
import { BatteryUpdatePop } from '../../components';
import './index.scss'


function SelectPop() {
const[isShowBattery,setIsShowBattery] = useState<boolean>(false)
const[selectIndex,setSelectIndex] = useState<number>(0)

function handleBatteryLevel(value){
    setSelectIndex(value)
}

return (
  <View>
    <Button onClick={() => setIsShowBattery(true)}>点击打开弹窗</Button>
    {/* 电量阀值 */}
    <BatteryUpdatePop
      currentBattery={selectIndex}
      isShowBattery={isShowBattery}
      setIsShowBattery={setIsShowBattery}
      handleBatteryLevel={handleBatteryLevel}
    ></BatteryUpdatePop>
  </View>
);
}
definePageConfig({
    navigationBarTitleText: "选择弹窗的使用",
    navigationStyle: "default",
    navigationBarTextStyle: "white",
    navigationBarBackgroundColor: "#FF716F" //导航栏背景颜色
});
export default SelectPop;