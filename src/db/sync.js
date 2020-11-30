/**
 * @description sequlize同步資料庫
 * @author 何振宏
 */
const seq = require('./seq');

//require('./model');

//測試連接
seq.authenticate().then(() => {
  console.log('auth ok')
}).catch(() => {
  console.log('auth error')
})

//執行同步 force: true 強制表格重新創建
seq.sync({ force: true }).then(() => {
  console.log('sync ok')
  process.exit() //釋放Sequelize
})  
