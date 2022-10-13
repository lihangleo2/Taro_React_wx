export interface LoginModel {
  access_token: string;
  refresh_token: string;
  token_type: string;
  expires_in: string;
  scope: string;
}

export interface LoginRequest {
  username: string;
  password: string;
}



//接口返回的类型
export interface Response<T> {
  data: T;
  statusCode: number;
}

//因为登录的接口 是res.data没有封装， 后续接口都进行了封装的原因，所以都采用了校验？
export interface DataResponse<T> {
  code: string;
  msg: string;
  data: T;
}


//auth类型
export type HeaderProps = {
  authorization?: string;
  "Access-Control-Request-Method"?: string;
};


//请求类型
export interface OptionsModel {
  url: string;
  payload?: object;
  mockData?: object;
  method?: "GET" | "POST" | "PUT" | "DELETE";
  isCors?: boolean;
  showLoading?: boolean;
  customHeaders?: any;
  customHandleResult?: Function;
  defaultFormat?: boolean;
  autoHideLoading?: boolean;
}
