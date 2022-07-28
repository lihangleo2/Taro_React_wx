// import { PagesPath } from "@/config/pagePath";
import Taro, { getCurrentInstance, getCurrentPages, useDidShow } from '@tarojs/taro'
import { Component, useState } from 'react'
import { View, Text, Swiper, SwiperItem, Button } from '@tarojs/components'
import './index.scss'
import { PagesPath } from "../../config/pagePath";

interface Props {
  test: string
}


function Home() {
  useDidShow(() => {
    // const data = Taro.getCurrentInstance().page?.data
    // console.log("============>data page ",data!.keyData);
    // console.log("============>data page ",data!.value);
    // console.log("============>data page ",JSON.stringify(data!.value));
    // var testObj = JSON.parse(JSON.stringify(data!.value))
    // console.log("============>data page ",testObj);


    // console.log("是否有数据呢" + data)
    var pages = getCurrentPages();
    const current = pages[pages.length - 1];
    const data = current.data
    // var valueString = JSON.stringify(data.value)
    console.log("============>data page ", data.keyData);
    // const endValue = data.value as Props
    // if (endValue != undefined) {
    //   console.log("============>data page 2222",endValue.test);
    // }
    console.log("============>data page 2222", data.value?.test);

    // console.log("============>data page ",endValue!.test);

    var woca = { "test": "123" }
    console.log("============>data page ", woca);
    console.log("============>data page 111", woca.test);

    // console.log("============>data page ",valueString['test'] as string);
    // var targetBean:Props = JSON.parse(valueString)

    // console.log("我有点搞不明白了" + data)
    // console.log(JSON.stringify(data))
  })




  function navigateTo() {
    Taro.setStorageSync('test', {kkk:"test is ok!"});
    Taro.navigateTo({
      url: `${PagesPath.taskCenter}?isFromTimer=true&taskId=32`,
      events: {
        //被打开页面传送到当前页面的数据
        acceptDataFromOpenedPage: function (data) {
          console.log("被打开页面传送到当前页面的数据")
          console.log(data)
        }
      },
      success: function (res) {
        // 通过eventChannel向被打开页面传送数据
        res.eventChannel.emit('testLeo', { data: 'test' })
      }
    })
  }





  return (
    <Swiper
      className='box'
      autoplay
      interval={1000}
      indicatorColor='999'
      // onClick={() => {
      //   Taro.showLoading({ title: '加载中' })
      //   setTimeout(() => {
      //     Taro.hideLoading()
      //   }, 2000);
      // }}
      onAnimationFinish={() => { }}
    >
      <SwiperItem>
        <View className='text'>1</View>
        <Button onClick={() => { navigateTo() }}>点击3跳转</Button>
      </SwiperItem>        <SwiperItem>
        <View className='text'>2</View>
      </SwiperItem>        <SwiperItem>
        <View className='text'>3</View>
      </SwiperItem>

    </Swiper>)
}


definePageConfig({
  navigationBarTitleText: '任务',
  navigationStyle: 'default'
})

export default Home;