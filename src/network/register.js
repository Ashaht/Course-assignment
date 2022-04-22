import { request } from "./request";

export function register(userName, userPhone, userPassword) {
  return request({
    url: '/user/registerByPhone',
    method: 'post',
    data: {
      userName,
      userPhone,
      userPassword
    }
  })
}