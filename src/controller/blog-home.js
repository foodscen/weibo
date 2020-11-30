/**
 * @description 首頁 controller
 * @author 何振宏
 */

const xss = require('xss')
const { createBlog, getFollowersBlogList } = require('../services/blog')
const { SuccessModel, ErrorModel } = require('../model/ResModel')
const { createBlogFailInfo } = require('../model/ErrorInfo')
const { PAGE_SIZE, REG_FOR_AT_WHO } = require('../conf/constant')
const { getUserInfo } = require('../services/user')
const { createAtRelation } = require('../services/at-relation')

/**
 * 創建微博
 * @param {Object} param0 創建微博所需資料 { userId, content, image }
 */
async function create({ userId, content, image }) {
  // 分析並收集 content 中的 @ 用戶
  // content 格式如 '哈囉 @李四 - lisi 你好 @王五 - wangwu '
  const atUserNameList = []
  content = content.replace(
    REG_FOR_AT_WHO,
    (matchStr, nickName, userName) => {
      // 目的不是 replace 而是獲取 userName
      atUserNameList.push(userName)
      return matchStr // 替換不生效，預期
    }
  )

  // 根據 @ 用帳號查詢用户訊息
  const atUserList = await Promise.all(
    atUserNameList.map(userName => getUserInfo(userName))
  )

  // 根據用户訊息，獲取用户 id
  const atUserIdList = atUserList.map(user => user.id)

  try {
    // 創建微博
    const blog = await createBlog({
      userId,
      content: xss(content),
      image
    })

    // 創建 @ 關係
    await Promise.all(atUserIdList.map(
      userId => createAtRelation(blog.id, userId)
    ))

    // 返回
    return new SuccessModel(blog)
  } catch (ex) {
    console.error(ex.message, ex.stack)
    return new ErrorModel(createBlogFailInfo)
  }
}

/**
 * 獲取首頁微博列表
 * @param {number} userId userId
 * @param {number} pageIndex page index
 */
async function getHomeBlogList(userId, pageIndex = 0) {
  const result = await getFollowersBlogList(
    {
      userId,
      pageIndex,
      pageSize: PAGE_SIZE
    }
  )
  const { count, blogList } = result

  // 返回
  return new SuccessModel({
    isEmpty: blogList.length === 0,
    blogList,
    pageSize: PAGE_SIZE,
    pageIndex,
    count
  })
}

module.exports = {
  create,
  getHomeBlogList
}
