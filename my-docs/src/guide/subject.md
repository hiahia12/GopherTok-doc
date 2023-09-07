---

footer: <a href="https://beian.miit.gov.cn">粤ICP备2023028963号</a>
---
# Subject
数据库设计

## Mysql
![img.png](img.png)
- user
  username建立唯一索引
- video
  video_sha256建立唯一索引
  user_id和create_time建立联合索引，加速根据user_id和create_time条件同时查询的操作，这对于按时间逆序返回用户视频非常有用，因为是按create_time排好序的，避免了文件排序
## Redis
- user
  gophertok-user_{username}为Key，registered为Value判断用户是否已经注册
- video
  gophertok-video_{file_sha256}为Key,url为Value
  gophertok-cover_{file_sha256}为Key,url为Value
- follow
  followerCountHASH中以userid为Key，数量为Value
  followCountHASH中以userid为Key，数量为Value
  friendCountHASH中以userid为Key，数量为Value
  cache:gopherTok:follow:id:{ToUserId}为Key，userid为Value
- favor
  HASH   gophertok:videoFavor:{UserId} 为Key，VideoId 为 Value
  使用哈希来记录用户所有点赞的视频id
  SET  gophertok:videoFavor:{VideoId} 为Key，UserId 为 member
  使用集合来记录某个视频下面的所有点赞用户的id