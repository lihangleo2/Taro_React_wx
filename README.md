
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

### 1.4、tsx文件里输入wx会自动输入代码模板(vscode做了代码配置)

### 1.5、安装taro-ui
npm install taro-ui


## 二、项目结构介绍
### 2.1、【action】
里面的ts文件放的是一些联网操作，有点像Android里的ViewModule.class，可以用多个ts文件进行区分。
* help.ts 暂时放的是图片加载的一些封装
* login.ts 放的是登录界面的一些联网请求

### 2.2、【api】
里面放的就是我们的baseUrl域名及url地址(可以稍作封装根据dev还是build去使用baseUrl)
* config.tsx baseUrl和接口文档Url的配置文件
* interceptor.ts 网络连接的拦截器，目前做的操作有：如果token失效，将当前的失败的接口请求数据存起来，自动刷新完token后，进行联网。如果是token异常，那么则跳入到登录界面
* request.ts 联网请求的封装都在这里。

### 2.3、【assets】 
一些本地资源及图片的使用，tabbar上的图片。本demo中暂时把用的图片放在这里，真正要用的时候，是放在oss里的。
* img 本地图片(tab上的图片，一般能再oss上放置的就不要放在本地)

```xml
本地图片的使用：
导入本地图片
import login_show_text from "../../assets/img/login_show_text.png";
在Image标签里的使用
<Image className='image'  src={login_show_pwd}></Image>

网络图片的使用：
<Image className='image'  src={"https....png"}></Image>
当然我们可以封装一下，直接使用如下：
<Image className="noTask_img" src={getOssPath("20220815/robot_inline.png")}></Image>
```


### 2.4、【components】自定义组件
* batteryUpdate 电量阀值,类似android中选择pop的使用
* menuPop 操作面板pop，类似底部弹出的pop
* navBar 自定义toolBar，可为全屏界面提供全透明toolBar等
* index.ts 这个界面的意思就是多个自定义组件通过index文件返回出去，那么在别的界面引用自定义组件只要引用这个index文件就行了

### 2.5、【config】
自定义的路由地址，写在这里的意思是，在页面中使用的时候不要总是引用全路径。项目的路由地址其实是要在app.config.ts里写上的
* pagePath.ts 将项目中所有路由地址放在这里，以后跳转某个页面则可直接用，不用每次写全路径，导致搞错
* spKey.ts 内部存储的一些key值，当然可以放一些全局使用的list，或者可以定义类似的文件存放别的值，达到解耦

### 2.6、【hooks】
自定义的hook方式，用以搭配mobx使用，即在整个项目中用hook的方式拿到mobx的状态在全局使用。(在demo中【store】包下定义了myStore.tsx进行了mobx状态管理，当然可以定义多个hook方法，如果能力达到的话，用index.ts进行返回。mobx状态管理有点类似android中的全局单例，可以再全局中拿状态使用)
* useStores.ts 自定义hook方式用以获取mobx状态存储
* index.ts 将自定义hook，通过一依赖文件返回出去。

### 2.7、【model】
存放数据类型，一般用以在联网请求的数据类型。
* common.model.ts 本地用的list数据，其实这个最好是放在配置文件config里
* login.model.ts 登录相关所用到的数据类型

### 2.8、【pages】存放业务代码;
* home 目前值放了home页面

### 2.9、【pagesDemo】
存放demo展示的所有代码

### 2.10、【store】
mobx状态管理，有点类似android中的静态单例，可以再全局中都能拿到状态使用。当然这里的store可以定义多个，并用index.tsx进行返回

### 2.11、【style】
一些自定义的样式，在common.scss里；比如上分割线就可以使用@include borderTopLine(#efefef, 1px);注意此配置在与src通层的config/index.js里

### 2.12、【utils】
代码工具类

### 2.13、[app.config.ts]
路由地址，有点像android的清单文件，如排在文件第一个位置，则是小程序的入口位置；tabbar的设置，及全局的一些页面样式设置

### 2.14、[app.scss]
全局的scss样式，即css样式。这里首先将taro-ui中使用的样式引入了。

### 2.15、[app.tsx]
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


