/**
 * @description user API 路由
 * @author blue
 */

const router = require('koa-router')()
const {
  isExist,
  register,
  login,
  deleteCurUser,
  changeInfo,
  changePassword,
  logout
} = require('../../controller/user')
const userValidate = require('../../validator/user')
const { genValidator } = require('../../middlewares/validator')
const { isTest } = require('../../utils/env')
const { loginCheck } = require('../../middlewares/loginChecks')
const { getFollowers } = require('../../controller/user-relation')

router.prefix('/api/user')

// 註冊路由
router.post('/register', genValidator(userValidate), async (ctx, next) => {
  const { userName, password, gender } = ctx.request.body
  ctx.body = await register({
    userName,
    password,
    gender
  })
})

// 用戶名是否存在
router.post('/isExist', async (ctx, next) => {
  const { userName } = ctx.request.body
  ctx.body = await isExist(userName)
})

// 登入
router.post('/login', async (ctx, next) => {
  const { userName, password } = ctx.request.body
  ctx.body = await login(ctx, userName, password)
})

// 刪除
router.post('/delete', loginCheck, async (ctx, next) => {
  if (isTest) {
    // 測試環境下，測試帳號登入之後，刪除自己
    const { userName } = ctx.session.userInfo
    ctx.body = await deleteCurUser(userName)
  }
})

// 修改個人訊息
router.patch('/changeInfo', loginCheck, genValidator(userValidate), async (ctx, next) => {
  const { nickName, city, picture } = ctx.request.body
  ctx.body = await changeInfo(ctx, { nickName, city, picture })
})

// 修改密碼
router.patch('/changePassword', loginCheck, genValidator(userValidate), async (ctx, next) => {
  const { password, newPassword } = ctx.request.body
  const { userName } = ctx.session.userInfo
  ctx.body = await changePassword(userName, password, newPassword)
})

// 登出
router.post('/logout', loginCheck, async (ctx, next) => {
  ctx.body = await logout(ctx)
})

// 獲取at列表(關注列表)
router.get('/getAtList', loginCheck, async (ctx, next) => {
  const { id: userId } = ctx.session.userInfo
  const result = await getFollowers(userId)
  const { followersList } = result.data
  const list = followersList.map(user => {
    return `${user.nickName} - ${user.userName}`
  })
  // 格式如['張三 - zhangsan', '李四 - lisi', '暱稱 - userName']
  ctx.body = list
})

module.exports = router
