/*
 * @Author: your name
 * @Date: 2020-04-07 22:41:15
 * @LastEditTime: 2020-04-07 22:54:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /koa2-weibo/src/model/ErrorInfo.js
 */


module.exports = {
  // 用户名已存在
  registerUserNameExistInfo: {
    errno: 10001,
    message: '用戶名已存在'
  },
  // 注册失败
  registerFailInfo: {
    errno: 10002,
    message: '註冊失敗，請重試'
  },
  // 用户名不存在
  registerUserNameNotExistInfo: {
    errno: 10003,
    message: '用戶名不存在'
  },
  // 登录失败
  loginFailInfo: {
    errno: 10004,
    message: '登入失敗，用戶名或密碼錯誤'
  },
  // 未登录
  loginCheckFailInfo: {
    errno: 10005,
    message: '您尚未登錄'
  },
  // 修改密码失败
  changePasswordFailInfo: {
    errno: 10006,
    message: '修改密碼失敗，請重試'
  },
  // 上传文件过大
  uploadFileSizeFailInfo: {
    errno: 10007,
    message: '上傳文件Size太大'
  },
  // 修改基本信息失败
  changeInfoFailInfo: {
    errno: 10008,
    message: '修改基本資料失敗'
  },
  // json schema 校验失败
  jsonSchemaFileInfo: {
    errno: 10009,
    message: '資料格式校驗錯誤'
  },
  // 删除用户失败
  deleteUserFailInfo: {
    errno: 10010,
    message: '删除用戶失敗'
  },
  // 添加关注失败
  addFollowerFailInfo: {
    errno: 10011,
    message: '添加關注失敗'
  },
  // 取消关注失败
  deleteFollowerFailInfo: {
    errno: 10012,
    message: '取消關注失敗'
  },
  // 创建微博失败
  createBlogFailInfo: {
    errno: 11001,
    message: '創建微博失敗，請重試'
  },
  // 删除微博失败
  deleteBlogFailInfo: {
    errno: 11002,
    message: '删除微博失敗，請重試'
  }
}