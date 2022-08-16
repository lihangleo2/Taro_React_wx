import { View } from '@tarojs/components'
import { observer } from 'mobx-react';
import { useEffect } from 'react';
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


    return (
        <View onClick={() => changeTestNumber(52)}>ui界面绘制区</View>
    )
}
definePageConfig({
    navigationBarTitleText: '首页',
    navigationStyle: 'default'
});
export default observer(Home);