/*
 * @description : blog暫存用
 * @Author: 何振宏
 * @Date: 2020-11-30 12:37:47
 */
const { get, set } = require('./_redis')
const { getBlogListByUser } = require('../services/blog')

// redis key 前缀
const KEY_PREFIX = 'weibo:square:'

/**
 * 獲取廣場列表暫存
 * @param {number} pageIndex pageIndex
 * @param {number} pageSize pageSize
 */
async function getSquareCacheList(pageIndex, pageSize) {
  const key = `${KEY_PREFIX}${pageIndex}_${pageSize}`

  // 嘗試獲取暫存
  const cacheResult = await get(key)
  if (cacheResult != null) {
    // 獲取暫存成功
    return cacheResult
  }

  // 没有暫存，則讀取資料庫
  const result = await getBlogListByUser({ pageIndex, pageSize })

  // 設定暫存，過期時間1min
  set(key, result, 60)

  return result
}

module.exports = {
  getSquareCacheList
}
