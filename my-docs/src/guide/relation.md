---

footer: <a href="https://beian.miit.gov.cn">粤ICP备2023028963号</a>
---
# Relation
该模块包含关注操作，获取关注、粉丝和好友列表。数据库使用mysql和redis,mysql和redis间数据同步使用kafka。
## 关注 && 取消关注
* 通过jwt校验身份
* 校验传入用户id是否存在，关注存在情况
* 通过redis实现关注和取消关注操作
* 通过kafka进行异步操作将消息存入MySQL
* 更新关注数、粉丝数和好友数


## 获取关注/粉丝列表/好友列表
* 通过jwt校验身份
* 校验传入用户id是否存在
* 从MySQL中查询关注信息,调用user接口获取user信息
### 亮点
* 调用user接口获取用户信息时采用并发调用，减少响应时间

