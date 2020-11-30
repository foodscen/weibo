/**
 * @description sequlize實例
 * @author 何振宏
 */

const Sequelize = require('sequelize')
const { MYSQL_CONF } = require('../conf/db')
const { isProd, isTest } = require('../utils/env')

//es6解構
const { host, user, pasword, database } = MYSQL_CONF

const conf = {
  host: host,   //資料庫主機名稱
  dialect: 'mysql'     //主機類型
}

//假如是Test環境，關閉log輸出
if (isTest) {
  conf.logging = () => { }
}

//測試使用直接連接模式，如果線上可使用Connection Pool
if (isProd) {
  conf.pool = {
    max: 5,             //連接池中最大連接數
    min: 0,             //連接池中最小連接數
    idle: 10000,     //每個線程最長等待時間
  }
}

const seq = new Sequelize(database, user, pasword, conf)



module.exports = seq