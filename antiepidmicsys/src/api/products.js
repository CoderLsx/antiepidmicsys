/**
 * 这个文件写项目用到的所有接口
 */
import request from "../utils/http";

// 模板,参数默认为空对象，一个接口写一个函数
export function get(params = {}) {
  return request({
    method: "", // 请求方法
    url: "", // 请求路径
    params, // 请求参数
  });
}
