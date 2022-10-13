import fetch from "../api/request";
import { spKey } from "../config/spKey";
import { DataResponse, LoginModel, LoginRequest } from "../model/login.model";
import { getSp } from "../utils/storageUtil";

//登录
export function doLoginTask(loginRequest: LoginRequest): Promise<LoginModel> {
  return fetch({
    url: "loginUrl",
    method: "POST",
    showLoading: true,
    payload: loginRequest,
    // isCors为true的意思是，会跳过baseUrl的拼接，使用自己url的全拼。
    // isCors:true
  });
}

//刷新token
export function doRefreshToken(): Promise<LoginModel> {
  return fetch({
    url: "refreshUrl",
    method: "POST",
    showLoading: true,
    customHeaders: {
      "Content-Type": "text/plain",
      authorization: "",
    },
    payload: getSp(spKey.loginModel).refresh_token,
  });
}

//获取验证码
export function doSendSmsCode(account: string): Promise<DataResponse<string>> {
  return fetch({
    url: "smsCode",
    method: "GET",
    showLoading: true,
    payload: {
      type: "PHONE",
      account,
    },
  });
}

//注册
export function doRegister(
  account,
  password,
  pin,
  orgCode
): Promise<DataResponse<string>> {
  return fetch({
    url: "registUrl",
    method: "POST",
    showLoading: true,
    defaultFormat: false,
    customHeaders: {
      "Content-Type": "application/vnd.slamtec.user-v1.0+json",
    },
    payload: {
      account,
      password,
      pin,
      orgCode,
      type: "PHONE",
    },
  });
}


