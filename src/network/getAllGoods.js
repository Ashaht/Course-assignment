import { request } from "./request";

export function getAllGoods() {
  return request({
    url: '/goods/findAllGoods',
    method: 'get'
  })
}

export class Goods {
  constructor(data) {
    this.iid = data.goodsId
    this.name = data.goodsName
    this.price = data.goodsPrice
    this.type = data.goodsType
    this.desc = data.goodsDescription
    this.inventory = data.goodsInventory
  }
}