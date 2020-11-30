const Sequelize = require('sequelize');
const seq = require('./seq');

//創建user表模型
//注意雖然定義表格名稱為user，但創建後名稱會是users
const User = seq.define('user', {
  //id欄位會自動創建且值會自行增加
  userName: {
    type: Sequelize.STRING,  //對應是varchar(255)
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  },
  nickName: {
    type: Sequelize.STRING,
    comment: '綽號'
  }
  //表格會自動增加createAt,updateAt 2個時間欄位
})

//創建blog表格
const Blog = seq.define('blog', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  content: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  userId: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
})

//外鍵關聯
// 創建外鍵 Blog.userId => User.id
Blog.belongsTo(User, {
  foreignKey: 'userId'
})
//或是
User.hasMany(Blog, {
  foreignKey: 'userId'
})


module.exports = {
  User,
  Blog
}