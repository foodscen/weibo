/*
 * @Author: your name
 * @Date: 2020-03-30 22:54:44
 * @LastEditTime: 2020-04-04 18:17:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /weibo-koa2/src/db/sync.js
 */

// 同步mysql資料庫
const seq = require('./seq.js');

//那些模型要建置資料庫
require('./model/index');

// 測試連接
seq.authenticate().then(() => {
  console.log('auth ok')
}).catch(() => {
  console.log('auth error', err)
});

// 執行
// force: true 表示如果資料庫已經存在資料庫則刪除重建
seq.sync({ force: true }).then(() => {
  console.log('sync ok')
  process.exit();
});