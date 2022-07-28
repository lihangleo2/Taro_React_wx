export default defineAppConfig({
  pages: [
    'pages/task/index',
    'pages/game/index',
    'pages/home/index',
    'pages/taskCenter/index',
  ],
  tabBar: {
    color: "#B7B7B7", //tab 上的文字默认颜色，仅支持十六进制颜色
    selectedColor: "#FF716F", //tab 上的文字选中时的颜色，仅支持十六进制颜色
    backgroundColor: "#FFFFFF", //tab 的背景色，仅支持十六进制颜色
    borderStyle: "black", //tabbar 上边框的颜色， 仅支持 black / white
    list: [
      {
        pagePath: "pages/home/index",
        text: "首页",
        iconPath: "./assets/img/tab_robot.png",
        selectedIconPath: "./assets/img/tab_robot_selected.png",
      },
      {
        pagePath: "pages/task/index",
        text: "任务",
        iconPath: "./assets/img/tab_setting.png",
        selectedIconPath: "./assets/img/tab_setting_selected.png",
      },
    ],
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
})
