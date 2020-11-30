/**
 * @description 微博 @ 關係 controller
 * @author 何振宏
 */

const {
  getAtRelationCount,
  getAtUserBlogList,
  updateAtRelation
} = require('../services/at-relation')
const { SuccessModel, ErrorModel } = require('../model/ResModel')
const { PAGE_SIZE } = require('../conf/constant')

/**
 * 獲取 @ 我的微博數量
 * @param {number} userId userId
 */
async function getAtMeCount(userId) {
  const count = await getAtRelationCount(userId)
  return new SuccessModel({
    count
  })
}

/**
 * 獲取 @ 用戶的微博列表
 * @param {number} userId user id
 * @param {number} pageIndex page index
 */
async function getAtMeBlogList(userId, pageIndex = 0) {
  const result = await getAtUserBlogList({
    userId,
    pageIndex,
    pageSize: PAGE_SIZE
  })
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

/**
 * 標記為已讀
 * @param {number} userId userId
 */
async function markAsRead(userId) {
  try {
    await updateAtRelation(
      { newIsRead: true },
      { userId, isRead: false }
    )
  } catch (ex) {
    console.error(ex)
  }

  // 不需要返回 SuccessModel 或 ErrorModel
}

module.exports = {
  getAtMeCount,
  getAtMeBlogList,
  markAsRead
}
