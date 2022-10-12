
# Taro_React_wx
Taro+React架构开发微信小程序


## 一、前言：准备工作
### 1.1、npm install
下载完项目后执行npm install(有点类似Android中的rebuild,将依赖下载到本地，即node_modules)

### 1.2、npm run dev:weapp
然后执行npm run dev:weapp 打包成微信小程序运行

### 1.3、添加mobx在react中的使用
npm add mobx
npm add mobx-react


## 二、项目结构介绍
### 2.1、【action】
里面的ts文件放的是一些联网操作，有点像Android里的ViewModule.class，可以用多个ts文件进行区分

### 2.2、【api】
里面放的就是我们的baseUrl域名及url地址(可以稍作封装根据dev还是build去使用baseUrl)

### 2.3、【assets\img】 
一些本地图片的使用，tabbar上的图片。本demo中暂时把用的图片放在这里，真正要用的时候，是放在oss里的。

本地图片的使用：
导入本地图片
import login_show_text from "../../assets/img/login_show_text.png";
在Image标签里的使用
<Image className='image'  src={login_show_pwd}></Image>

网络图片的使用：
<Image className='image'  src={"https....png"}></Image>
当然我们可以封装一下，直接使用如下：
<Image className="noTask_img" src={getOssPath("20220815/robot_inline.png")}></Image>
                    
### 2.4、【config】
自定义的路由地址，写在这里的意思是，在页面中使用的时候不要总是引用全路径。项目的路由地址其实是要在app.config.ts里写上的


### 2.5、【hooks】
自定义的hook方式，用以搭配mobx使用，即在整个项目中用hook的方式拿到mobx的状态在全局使用。(在demo中【store】包下定义了myStore.tsx进行了mobx状态管理，当然可以定义多个hook方法，如果能力达到的话，用index.ts进行返回。mobx状态管理有点类似android中的全局单例，可以再全局中拿状态使用)

### 2.6、【pages】存放业务代码

### 2.7、【store】
mobx状态管理，有点类似android中的静态单例，可以再全局中都能拿到状态使用。当然这里的store可以定义多个，并用index.tsx进行返回

### 2.8、【utils】
代码工具类

### 2.9、[app.config.ts]
路由地址，有点像android的清单文件，如排在文件第一个位置，则是小程序的入口位置；tabbar的设置，及全局的一些页面样式设置

### 2.10、[app.scss]
全局的scss样式，即css样式

### 2.11、[app.tsx]
入口文件，有点类似android的application。这里已经搭配mobx做了一些操作


## 三、使用mobx状态管理：
### 3.1、在路径：Taro_React_wx\src\store\myStore
在store里定义我们的mobx,可定义多个

### 3.2、在路径：Taro_React_wx\src\store\index.tsx
定义index文件可以将我们多个mobx状态管理文件传递出去

### 3.3、在路径：Taro_React_wx\src\app.tsx
将文件挂在全局

### 3.4、在路径：Taro_React_wx\src\hooks\useStores.ts
将自定义hook,拿到我们的mobx状态管理，这里可能有多个hook所以定义了个index

### 3.5、那么在我们的home页面就可以这样用了
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

## 四、自定义tabbar教程（在custom_tab_bar分支上）
### 4.1、在app.config.ts文件tabBar加上如下标签：
```xml
tabBar: {
    custom: true,
}
```

### 4.2、然后添加custom-tab-bar文件夹（这里切换tab用到了mobx状态管理）

### 4.3、直接运行就搞定了，关键点在app.config.ts里设置custom:true


