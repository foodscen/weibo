<!--
 * @Author: your name
 * @Date: 2020-03-30 00:10:05
 * @LastEditTime: 2020-04-18 16:42:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /koa2-weibo/README.md
 -->
# 實現一個建議微博

先看下圖效果：

登入頁面：

![image-20200417230654767](./img/login.png)

註冊頁面：

![image-20200417230711059](./img/register.png)

首頁：

![image-20200417231105950](./img/home.png)

廣場：

![image-20200417231209888](./img/square.png)

我的空間：

![image-20200417231237274](./img/profile.png)

設定：

![image-20200417231250818](./img/setting.png)

### 技術選型：koa2+mysql+session+ejs+redis+jest


### 建置資料庫:

1. 建立資料庫koa2_weibo_db(node db/sync.js)
2. users表

| Column   | Type        | 主鍵 | 是否不為空| 自動增加 | Default | 備註   |
| -------- | ----------- | ---- | ---------- | -------- | ------- | ------ |
| id       | int         | Y    | Y          | Y        |         | 主鍵id |
| username | varchar(20) |      | Y          |          |         | 用戶名 |
| password | varchar(20) |      | Y          |          |         | 密碼  |
| nickname | varchar(10) |      | Y          |          |         | 暱稱   |

3.blogs表

| column  |    Type     | 主鍵 | 是否不為空 | 自動增加 | Default | 備註   |
| :-----: | :---------: | :--: | :--------: | :------: | :-----: | ------ |
|   id    |     int     |  Y   |     Y      |    Y     |         | 主鍵id |
| tiitle  | varchar(50) |      |     Y      |          |         | 標題  |
| content |    text     |      |     Y      |          |         | 内容   |
| userid  |     int     |      |     Y      |          |         | 用戶id |

4.粉絲表

|   column   | Type | 主鍵 | 是否不為空 | 自動增加 | default | 備註         |
| :--------: | :--: | :--: | :--------: | :------: | :-----: | ------------ |
|     id     | int  |  Y   |     Y      |    Y     |         | 主鍵id       |
|   userId   | int  |      |     Y      |          |         | 用戶id       |
| followerId | int  |      |     Y      |          |         | 被關注用戶id |

5.@用戶表

| columnd | type | 主鍵 | 是否不為空 | 自動增加 | Default | 備註    |
| :-----: | ---- | ---- | ---------- | -------- | ------- | -------- |
|   id    | int  | Y    | Y          | Y        |         | 主鍵id   |
| userId  | int  |      | Y          |          |         | 用戶id   |
| blogId  | int  |      | Y          |          |         | 博客id   |
| isRead  | Bool |      | Y          |          |         | 是否閱讀 |

### 安裝
npm install

### 執行
+ redis-server
+ npm run dev









