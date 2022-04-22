import { request } from "./request";

export function login(userPhone, userPassword) {
  return request({
    url: '/user/login',
    method: 'post',
    data: {
      userPhone,
      userPassword
    }
  })
}