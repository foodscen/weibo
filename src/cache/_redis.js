/*
 * @description:連接Redis方法 set ,get
 * @Author: 何振宏
 * @Date: 2020-11-22 12:22:56
 */

const redis = require('redis')
const { REDIS_CONF } = require('../conf/db')

// 建立客戶端
const redisClient = redis.createClient(REDIS_CONF.port, REDIS_CONF.host)
redisClient.on('error', err => {
  console.error('redis error', err)
})

/**
 * redis set
 * @param {string} key  鍵
 * @param {string} val  值
 * @param {*} timeout 過期時間，單位s
 */
function set(key, val, timeout = 60 * 60) {
  if (typeof val === 'object') {
    val = JSON.stringify(val)
  }

  redisClient.set(key, val)
  redisClient.expire(key, timeout)
}

function get(key) {
  const promise = new Promise((resolve, reject) => {
    redisClient.get(key, (err, val) => {
      if (err) {
        reject(err)
        return
      }
      if (val == null) {
        resolve(null)
      }
      try {
        resolve(
          // 嘗試取出來的值轉為物件
          JSON.parse(val)
        )
      } catch (ex) {
        resolve(val)
      }
    })
  })
  return promise
}

module.exports = {
  set,
  get
}