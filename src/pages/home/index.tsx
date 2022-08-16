import { Button, View } from '@tarojs/components'
import Taro from '@tarojs/taro';
import { observer } from 'mobx-react';
import { useEffect } from 'react';
import { PagesPath } from '../../config/pagePath';
import { useStores } from '../../hooks/index';


function Home() {
    const {
        MyStore: {
            testNumber,
            changeTestNumber,
        }
    } = useStores();

    useEffect(() => {
        console.log('====================================');
        console.log(testNumber);
        console.log('====================================');
    }, [testNumber])


    function goRegits() {
        Taro.navigateTo({
            url: PagesPath.regist,
        })
    }
    function goRotbotList() {
        Taro.navigateTo({
            url: PagesPath.robotlist,
        })
    }

    function scanRobot() {
        Taro.navigateTo({
            url: PagesPath.scanrobot,
        })
    }


    return (

        <View>
            <View onClick={() => changeTestNumber(52)}>点击，设置mobx状态管理存储数据</View>
            <Button onClick={goRegits}>跳转注册界面</Button>
            <Button onClick={goRotbotList}>跳转到扫描机器人列表</Button>
            <Button onClick={scanRobot}>跳转到扫描机器人添加页面</Button>
        </View>

    )
}
definePageConfig({
    navigationBarTitleText: '首页',
    navigationStyle: 'default',
});
export default observer(Home);