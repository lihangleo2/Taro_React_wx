
import { View, Text, Button } from '@tarojs/components'
import { makeAutoObservable } from "mobx"
import { observer } from "mobx-react"
import React, { useState, useEffect, useRef } from 'react'
import Taro, { useDidShow, useDidHide, useRouter, getCurrentPages } from "@tarojs/taro";



//对应用状态进行建模
class Timer {
  secondPassed = 0
  constructor() {
    makeAutoObservable(this)
  }

  increase() {
    this.secondPassed += 1
  }

  reset() {
    this.secondPassed = 0
  }
}

const myTimer = new Timer()
function stopAndReset(intervalId) {
  myTimer.reset()
  if (intervalId != null) {
    clearInterval(intervalId)
  }
}


function Test() {
  const { isFromTimer, taskId } = useRouter().params;

  // const [intervalId, setIntervalId] = useState<NodeJS.Timer>();
  // const [a, seta] = useState<Number>(0);
  const [text, setText] = useState<string>()
  const timeIdRef = useRef<NodeJS.Timer>()
  const router = useRouter().params




  useDidShow(() => {
    console.log('------- 什么鬼呀！！！ -------')
    var pages = getCurrentPages();
    const current = pages[pages.length - 1];
    const event = current.getOpenerEventChannel();
    event.on('testLeo', params => {
      console.log('------- 获取到的数据 -------')
      console.log(params);
    });
  })



  function setBeforeData() {
    let pages = getCurrentPages()
    let prevPage = pages[pages.length - 2]
    //获取上个页面pager
    prevPage.setData({ keyData: '测试数据', value: { test: "123" } })
    Taro.navigateBack({
      delta: 1
    })
  }

  function passToBeforeData() {
    var pages = getCurrentPages();
    const current = pages[pages.length - 1];
    const event = current.getOpenerEventChannel();
    event.emit('acceptDataFromOpenedPage', { keyData: '测试数据', value: { test: "123" } });
  }


  function getStorageData() {
    const storageData = Taro.getStorageSync('test')
    console.log("数据是有的吧", storageData);
  }

  function getval(x: number, y?: number) {
    return x + (y || 0);
  }

  useEffect(() => {
    console.log(isFromTimer)
    console.log(taskId)
    console.log('--------------')

    console.log('====== useEffect on ======')
    const myInterval = setInterval(() => {
      myTimer.increase()
    }, 1000)

    timeIdRef.current = myInterval
    return () => {
      timeIdRef.current && clearInterval(timeIdRef.current)
      console.log('====== useEffect off ======')
    }
  }, [])


  useEffect(() => {
    Taro.showToast({
      title: '成功',
      icon: 'success',
      duration: 2000
    })
  }, [text])




  // useDidShow(()=>{
  //   const myInterval = setInterval(() => {
  //     myTimer.increase()
  //   }, 1000)
  //   setIntervalId(myInterval)
  //   console.log('======页面打开======')
  // })

  // useDidHide(()=>{
  //   //注意这不是页面退出
  //   clearInterval(intervalId)
  //   console.log('======页面关闭======')
  // })



  return (
    <View className='index'>
      <Button onClick={() => stopAndReset(timeIdRef.current)}>{myTimer.secondPassed}</Button>
      <Button onClick={() => setText("被改变了！")}>改变text</Button>
      <View>{text}</View>
      <Button onClick={() => Taro.navigateBack({ delta: 1 })}>返回</Button>
      <Button onClick={() => setBeforeData()}>传数据到上个页面</Button>
      <Button onClick={() => passToBeforeData()}>点击传递数据</Button>
      <Button onClick={() => getStorageData()}>获取数据</Button>
    </View>
  )
}

definePageConfig({
  navigationBarTitleText: '任务设置中心',
  navigationStyle: 'default'
});

export default observer(Test);