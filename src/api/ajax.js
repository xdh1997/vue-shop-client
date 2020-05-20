/*
  ajax请求函数模块
  返回值：promise对象(异步返回的数据是response.data)
 */

import axios from 'axios'

export default function ajax (url, data={}, method='GET') {
  return new Promise((resolve, reject) => {
    let promise

    if(method.toUpperCase() === 'GET') {
      promise = axios.get(url, {  // 配置对象，将GET方式的传递过来的参数拼接到url上(查看axios文档即可知道)
        params: data
      })
    } else {
      promise = axios.post(url, data)
    }

    promise.then(response => {
      // 成功
      resolve(response.data)
    }).catch(error => {
      // 失败
      reject(error)
    })
  })
}
