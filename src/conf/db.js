/**
 * @description 儲存配置
 * @author 何振宏
 */

const { isProd } = require('../utils/env.js')

let REDIS_CONF = {
  //線上的redis配置
  port: 6379,
  host: '127.0.0.1'
}

let MYSQL_CONF = {
  host: 'localhost',
  user: 'root',
  password: '123456',
  port: 3306,
  database: 'koa2_weibo_db'
}

if (isProd) {
  //正式區
  REDIS_CONF = {
    port: 6379,
    host: '127.0.0.1'
  }

  //正式區
  MYSQL_CONF = {
    host: 'localhost',
    user: 'root',
    password: '123456',
    port: 3306,
    database: 'koa2_weibo_db'
  }
}

module.exports = {
  REDIS_CONF,
  MYSQL_CONF
}