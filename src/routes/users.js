const router = require('koa-router')()
/*前綴字users，意思要在url中增加users => http://localhost:3000 /users/bar */
router.prefix('/users')

router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!'
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

router.post('/login', async (ctx, next) => {
  const { username, password } = ctx.request.body
  ctx.body = {
    tag: 100,
    username,
    password
  }
})
module.exports = router
