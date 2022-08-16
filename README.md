# Taro_React_wx
Taro+React架构开发微信小程序
//20220816 测试 taro+react go and finsh


# Taro_React_wx
Taro+React架构开发微信小程序

## 一、使用mobx状态管理：
1、在路径：Taro_React_wx\src\store\myStore
在store里定义我们的mobx,可定义多个

2、在路径：Taro_React_wx\src\store\index.tsx
定义index文件可以将我们多个mobx状态管理文件传递出去

3、在路径：Taro_React_wx\src\app.tsx
将文件挂在全局

4、在路径：Taro_React_wx\src\hooks\useStores.ts
将自定义hook,拿到我们的mobx状态管理，这里可能有多个hook所以定义了个index

5、那么在我们的home页面就可以这样用了
```xml
    const {
        MyStore: {
            testNumber,
            changeTestNumber,
        }
    } = useStores();
```

记得我们的要用observer包住
```xml
export default observer(Home);
```

##二、自定义tabbar教程
在app.config.ts文件tabBar加上如下标签：
```xml
tabBar: {
    custom: true,
}
```

我继续修改试试

