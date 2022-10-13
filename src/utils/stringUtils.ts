/**
 * 判断字符串是否为可用值
 * @param str
 * @returns boolean
 */
export function isValid(str): boolean {
  return str !== "" && str !== null && str !== undefined && str !== "undefined";
}

/**
 * 字符串集合转字符串
 * @param strArr
 * @returns str
 */

export function strArrToString(strArr: string[]): string {
  var str = "";

  for (let index = 0; index < strArr.length; index++) {
    const element = strArr[index];
    if(index==strArr.length-1){
      str += `${element}`;
    }else{
      str += `${element}、`;
    }
  }
  return str;
}

