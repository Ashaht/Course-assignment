import { localRequest } from "./localRequest"

export function getAllQueue() {
  return localRequest({
    url: '/queue',
    method: 'get'
  })
}

export function getQueueByTime(clock) {
  let tempUrl = '/queueTime/' + clock
  return localRequest({
    url: tempUrl,
    method: 'get'
  })
}

export function getQueueBySsalc(ssalc) {
  let tempUrl = '/queueSsalc/' + ssalc
  return localRequest({
    url: tempUrl,
    method: 'get'
  })
}