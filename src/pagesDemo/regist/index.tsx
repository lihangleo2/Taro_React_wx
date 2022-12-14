import React, { useEffect, useRef, useState } from 'react';
import { Image, Input, Radio, Text, View } from '@tarojs/components'
import { showTextToast } from "../../utils/toastUtils";
import login_show_pwd from "../../assets/img/login_show_pwd.png";
import login_show_text from "../../assets/img/login_show_text.png";
import "./index.scss";

/**
 * 注册页面
 * @returns 
 */
function Regist() {
    
    //============
    const [isChecked, setIsChecked] = useState<boolean>(false);
    const [organCode, setOrganCode] = useState<string>();
    const [isPassword, setIsPassword] = useState<boolean>(true);
    const timeIdRef = useRef<NodeJS.Timer>()
    const [phoneCodeText, setPhoneCodeText] = useState<string>("获取验证码");
    //预防连续点击开启倒计时的情况
    const firstTimeRef = useRef<number>(-1)

    function checkRadio() {
        console.log("被点击了！")
        setIsChecked(!isChecked)
    }

    function goUserPro() {
        showTextToast("点击了用户协议");
    }

    function goPrivatePro() {
        showTextToast("点击了隐私协议");

    }


    const checkOrganCode = (mOrganCode) => {
        setOrganCode(mOrganCode)
    }

    useEffect(() => {
        let result = organCode?.replace(/[^\w\.\/]/ig, '')
        setOrganCode(result)
    }, [organCode])


    function getPhoneCode() {
        if (firstTimeRef.current == -1) {
            firstTimeRef.current = 10
            setPhoneCodeText(`剩余${firstTimeRef.current}秒`)
            const myInterval = setInterval(() => {
                firstTimeRef.current-=1
                setPhoneCodeText(`剩余${firstTimeRef.current}秒`)
                if (firstTimeRef.current==0) {
                    timeIdRef.current && clearInterval(timeIdRef.current)
                    firstTimeRef.current=-1
                    setPhoneCodeText("获取验证码")
                }
            }, 1000)
            timeIdRef.current = myInterval
        }
    }

    useEffect(() => {
        return () => {
            timeIdRef.current && clearInterval(timeIdRef.current)
        }
    }, [])




    return (
        <View className="regist">
            <View className="layout_out">

                <View>
                    * 手机号码
                    <View className="input">
                        <Image className="image"  src={login_show_pwd}></Image>
                        <Input className="width" placeholder="请输入手机号" maxlength={11} type="number">
                        </Input>
                    </View>
                </View>

                <View className="input_margin">
                    * 密码
                    <View className="input">
                        <Image className="image" src={login_show_pwd}></Image>
                        <Input className="width" placeholder="请输入密码" password={isPassword}>
                        </Input>
                        <Image className="image" onClick={() => setIsPassword(!isPassword)} src={
                            isPassword
                                ? login_show_text
                                : login_show_pwd
                        }
                        ></Image>
                    </View>
                </View>

                <View className="input_margin">
                    * 验证码
                    <View className="input">
                        <Image className="image" src={login_show_pwd}></Image>
                        <Input className="width" placeholder="请输入验证码" type="number">
                        </Input>

                        <View className="codeBtn" onClick={getPhoneCode}>
                            {phoneCodeText}
                        </View>
                    </View>
                </View>


                <View className="input_margin">
                    * 组织机构代码
                    <View className="input">
                        <Image className="image" src={login_show_pwd}></Image>
                        <Input className="width" placeholder="请输入组织机构代码" value={organCode} onInput={e => checkOrganCode(e.detail.value)}>
                        </Input>
                    </View>
                </View>


                <View className="remind_text">
                    <View>
                        * 请确保手机号输入正确，注册后将无法修改！
                    </View>

                    <View>
                        * 注册的账号也可在云平台上查看消杀数据
                    </View>
                </View>


                <View className="checkBox">
                    <Radio onClick={checkRadio} checked={isChecked}></Radio >
                    我已阅读并同意
                    <Text className="blue_text" onClick={goUserPro}>《用户协议》</Text>和 <Text onClick={goPrivatePro} className="blue_text">《隐私协议》</Text>
                </View>


                <View className="regist_btn">
                    开始注册
                </View>
            </View>
        </View>
    )
}
definePageConfig({
    navigationBarTitleText: '注册新账号',
    navigationStyle: 'default',
    navigationBarTextStyle: "white",
    navigationBarBackgroundColor: "#FF716F", //导航栏背景颜色
});

export default Regist;