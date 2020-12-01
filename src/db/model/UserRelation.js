/*
 * @Author: your name
 * @Date: 2020-04-11 09:49:35
 * @LastEditTime: 2020-04-11 09:49:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /koa2-weibo/src/db/model/UserRelation.js
 */
const seq = require('../seq')
const { INTEGER } = require('../types')

const UserRelation = seq.define('userRelation', {
  userId: {
    type: INTEGER,
    allowNull: false,
    comment: '用戶 id'
  },
  followerId: {
    type: INTEGER,
    allowNull: false,
    comment: '被關注用戶的 id'
  }
})

module.exports = UserRelation