import axios from 'axios'

export function request(config) {
  //创建axios实例
  const instance = axios.create({
    baseURL: 'http://46046j2b84.qicp.vip',
    timeout: 5000
  })

  instance.interceptors.request.use(config1 => {
    return config1
  }, error => {
    console.log(error)
    return Promise.reject(error)
  })

  // instance.interceptors.request.use(res => {
  //   return res.data
  // }, err => {
  //   console.log(err)
  // })

  return instance(config)
}