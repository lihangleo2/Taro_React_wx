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



//获取机器状态
export interface RobotStageModel {
  disinfectant_task_id: string; //消杀任务ID
  disinfectant_task_status: string; //消杀任务状态;CANCELED CANCELING CancelledOrTimeout Completed FAILED Failed Finished InProgress Pending READY RUNNING Running SUCCEEDED Stopped
  disinfectant_task_reason: string; //失败任务的原因
  disinfectant_task_stage: string; //消杀任务事件阶段："PREPARE"： 准备中（给消杀机器开启预留，为了后续消杀设备开启后会等待的状态） "GOING_TO_ELEVATOR"： 前往电梯 "WAIT_FOR_ELEVATOR"：等电梯 "GOING_INTO_ELEVATOR"：进电梯 "IN_ELEVATOR": 在电梯内 "GOING_OUT_OF_ELEVATOR": 出电梯 "GOING_TO_TASK_TARGET"：前往任务点 "ARRIVED_AT_TASK_TARGET": 到达任务点
  disinfectant_task_target: string; // poi点位名称;
  disinfectant_task_target_group:string;//poi分组
  stage: string; //DEVICE_ERROR:设备异常;ON_DELIVERING:消杀中;ARRIVED_AT_TARGET:消杀完成;PAUSED:消杀暂停;DEVICE_CHARGING:充电中;IDLE:正常
  disinfectant_fluid_level: string; //消毒液液位："EMPTY" : 空 "FULL"： 满 "NORMAL"： 正常
  disinfectant_task_duration: string; //消杀任务时长：单位分钟
  error_code: string; //机器错误码，详见产品文档。stage为：DEVICE_ERROR时的error_code值;额外定义了：10000000：离线状态；10000001:没有地图；10000002：溶液不足；10000003：电量不足；0：任务状态或正常的非异常状态
  battery: string; //电量值
  message: string; //信息提示
  disinfectant_task_poi_list: string[]; //当前任务poi点位集合
  battery_lower_limit:string;//电量阀值
  click_disinfect_flag:string;//是否点击了开始消杀
  go_home_flag:string;//是否点击了快速回桩
  is_on_dock:string;//是否在桩
}