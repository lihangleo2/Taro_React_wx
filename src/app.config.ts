export default defineAppConfig({
  //这里第一个位置，可以决定小程序先切换的页面
  pages: [
    'pagesDemo/home/index',
    'pages/home/index',
    'pagesDemo/regist/index',
    'pagesDemo/robotlist/index',
    'pagesDemo/scanrobot/index',
    'pagesDemo/lifeHook/index',
    'pagesDemo/valuePass/index',
    'pagesDemo/valuePassSon/index',
    'pagesDemo/toastUi/index',
    'pagesDemo/network/index',
    'pagesDemo/uiAbout/index',
    'pagesDemo/bottomPop/index',
    'pagesDemo/selectPop/index',
    'pagesDemo/fullScreen/index',
  ],
  tabBar: {
    // custom: true,
    color: "#B7B7B7", //tab 上的文字默认颜色，仅支持十六进制颜色
    selectedColor: "#FF716F", //tab 上的文字选中时的颜色，仅支持十六进制颜色
    backgroundColor: "#FFFFFF", //tab 的背景色，仅支持十六进制颜色
    borderStyle: "black", //tabbar 上边框的颜色， 仅支持 black / white
    list: [
      {
        pagePath: "pagesDemo/home/index",
        text: "demo页",
        iconPath: "./assets/img/tab_setting.png",
        selectedIconPath: "./assets/img/tab_setting_selected.png",
      },
      {
        pagePath: "pages/home/index",
        text: "首页",
        iconPath: "./assets/img/tab_robot.png",
        selectedIconPath: "./assets/img/tab_robot_selected.png",
      },
    ],
  },
  window: {

    navigationBarBackgroundColor: "#fff", //导航栏背景颜色
    navigationBarTextStyle: "black", //导航栏标题颜色，仅支持 black / white
    navigationBarTitleText: "", //导航栏标题文字内容
    navigationStyle: "default", //导航栏样式，仅支持以下值：default 默认样式；custom 自定义导航栏，只保留右上角胶囊按钮
    backgroundColor: "#fff", //窗口的背景色
    backgroundTextStyle: "dark", //下拉 loading 的样式，仅支持 dark / light
    
  }
})
