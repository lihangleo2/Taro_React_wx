import { ossPath } from "src/api/config";

export function getOssPath(path: string) {
  return `${ossPath()}/web/robot_web/${path}`;
  // ?time=${new Date().getTime()}
}
