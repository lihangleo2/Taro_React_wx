
import { CoverImage, CoverView} from '@tarojs/components'
import Taro from '@tarojs/taro';
import { observer } from 'mobx-react';
import { PagesPath } from '../config/pagePath';
import { useStores } from '../hooks/index';
import "./index.scss"


function Index() {

    const {
        MyStore: {
            selected,
            changeSelectedTab,
        }
    } = useStores();

    const tabList = {
        color: "#B7B7B7",
        selectedColor: "#FF716F",
        list: [
            {
                pagePath: PagesPath.home,
                text: "自定义tab首页",
                iconPath: "./../assets/img/tab_robot.png",
                selectedIconPath: "./../assets/img/tab_robot_selected.png",
            },
            {
                pagePath: PagesPath.task,
                text: "自定tab任务",
                iconPath: "./../assets/img/tab_setting.png",
                selectedIconPath: "./../assets/img/tab_setting_selected.png",
            },
            
        ],
    };



    const switchTab = (item, index) => {
        changeSelectedTab(index);
        console.log("我现在的index ==>" + index)
        Taro.switchTab({
            url: item.pagePath,
        });
    };



    return (
        <CoverView className='tab-bar'>
            <CoverView className='tab-bar-border'></CoverView>
            {tabList.list.map((item, index) => {
                return (
                    <CoverView key={index} className='tab-bar-item' onClick={() => switchTab(item, index)}>
                        <CoverImage src={selected === index ? item.selectedIconPath : item.iconPath} />
                        <CoverView style={{ color: selected === index ? tabList.selectedColor : tabList.color }}>{item.text}</CoverView>
                    </CoverView>
                )
            })}
        </CoverView>
    )
}


definePageConfig({
    disableScroll: true,
});

export default observer(Index);