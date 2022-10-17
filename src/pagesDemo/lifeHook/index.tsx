import { Button, Input, View } from "@tarojs/components";
import { useDidHide, useDidShow } from "@tarojs/taro";
import { useEffect, useRef, useState } from "react";
import "./index.scss";

function LifeHook() {
  /**
   * 【1】
   *  */
  const [myNumber, setMyNumber] = useState<string>("1");

  /**
   * 【2】
   *  */
  //监听页面进入和退出
  // useEffect(() => {
  //   //页面进入
  //   console.log("页面进入");
  //   return () => {
  //     //页面退出
  //     console.log("页面退出");
  //   };
  // }, []);

  //监听myNumber数据变化(注意进入这个页面默认值会触发useEffect，可以在下面进行判断排出这个默认值)
  useEffect(() => {
    console.log(`myNumber数据发生变化 ====>${myNumber}`);
  }, [myNumber]);

  /**
   * 【3】
   *  */
  //有点类似android中的onStart
  useDidShow(() => {
    console.log("每次回到这个页面都会触发");
  });

  /**
   * 【4】
   *  */
  //有点类似android中的onPause
  useDidHide(() => {
    console.log("每次离开页面都会触发");
  });

  /**
   * 【5】
   *  */
  //【5.1】
  //timeIdRef是解决退出界面定时器关不掉的问题
  const timeIdRef = useRef<NodeJS.Timer>();
  //numberRef是为了记录自增1的值，否则也可以用mobx状态管理，或者使用内部存储Taro.setStorageSync(key, value)
  const numberRef = useRef<number>(0);
  //timeNumber为了再页面上实时展示
  const [timeNumber, setTimeNumber] = useState<number>(0);
  useEffect(() => {
    //页面进入
    console.log("页面进入");
    const myInterval = setInterval(() => {
      // 注意useState里拿自己的值自增1是实现不了的。如：setUseRefNumber(useRefNumber+1)
      // 我们可以用useRef来记录值，如下：
      numberRef.current = numberRef.current + 1;
      setTimeNumber(numberRef.current);
    }, 1000);

    timeIdRef.current = myInterval;
    return () => {
      //页面退出
      console.log("页面退出");
      timeIdRef.current && clearInterval(timeIdRef.current);
    };
  }, []);

  //【5.2】
  const domRef = useRef<HTMLInputElement>(null);

  return (
    <View className="lifeHook">
      <View className="text_title">{myNumber}、useState</View>
      <View className="text_content">
        1.1、有点类似android中的数据绑定，会自动更新页面。括号的值是初始化值
      </View>
      <View className="text_content">
        1.2、注意：通过set(a)后，下一句代码直接使用useState的值是不行的，如果要用就用值a
      </View>
      <Button onClick={() => setMyNumber("⑴")}>点击设置标题为⑴</Button>

      <View className="text_title_second">2、useEffect</View>
      <View className="text_content">
        2.1、数据监听，根据后者[]里的参数变化触发，[]里可以监听多个参数
      </View>
      <View className="text_content">
        2.2、如果[]是空的话，那么就是监听【页面进入】和【页面退出】
      </View>

      <View className="text_title_second">3、useDidShow</View>
      <View className="text_content">
        类似android中的onStart，每次进入页面都会触发，不管是新开页面还是从别的页面退回
      </View>

      <View className="text_title_second">4、useDidHide</View>
      <View className="text_content">
        类似android中的onPause，每次离开这个页面时都会触发
      </View>

      <View className="text_title_second">5、useRef</View>
      <View className="text_content">
        5.1、useRef返回一个ref对象，在整个生命周期内保持不变。其.current属性像一个保存值得盒子。比如useRef解决定时器在退出页面关不掉的问题
      </View>
      <Button>计时器时间{timeNumber}</Button>
      <View className="text_content">
        5.2、可以直接获取dom元素操作dom。比如下方一个input,可以操作dom获取焦点
      </View>
      <View>
        <Input
          ref={domRef}
          type="text"
          className="input_style"
          placeholder="请输入名字"
        />
        <Button
          onClick={() => {
            domRef.current?.focus();
          }}
        >
          Focus the input
        </Button>
      </View>
    </View>
  );
}
definePageConfig({
  navigationBarTitleText: "hooks声明周期",
  navigationStyle: "default",
  navigationBarTextStyle: "white",
  navigationBarBackgroundColor: "#FF716F" //导航栏背景颜色
});
export default LifeHook;
