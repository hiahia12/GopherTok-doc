export const data = JSON.parse("{\"key\":\"v-2fa66a1e\",\"path\":\"/guide/relation.html\",\"title\":\"Relation\",\"lang\":\"zh-CN\",\"frontmatter\":{\"description\":\"该模块包含关注操作，获取关注、粉丝和好友列表。数据库使用mysql和redis,mysql和redis间数据同步使用kafka。 关注 && 取消关注\\r通过jwt校验身份; \\r校验传入用户id是否存在，关注存在情况; \\r通过redis实现关注和取消关注操作; \\r通过kafka进行异步操作将消息存入MySQL; \\r更新关注数、粉丝数和好友数; 获取关注/...\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://vuepress-theme-hope-docs-demo.netlify.app/guide/relation.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"GopherTok\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Relation\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"该模块包含关注操作，获取关注、粉丝和好友列表。数据库使用mysql和redis,mysql和redis间数据同步使用kafka。 关注 && 取消关注\\r通过jwt校验身份; \\r校验传入用户id是否存在，关注存在情况; \\r通过redis实现关注和取消关注操作; \\r通过kafka进行异步操作将消息存入MySQL; \\r更新关注数、粉丝数和好友数; 获取关注/...\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"Gopher\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"Relation\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"Gopher\\\",\\\"url\\\":\\\"https://github.com/GophersTeam\\\"}]}\"]]},\"headers\":[{\"level\":2,\"title\":\"关注 && 取消关注\",\"slug\":\"关注-取消关注\",\"link\":\"#关注-取消关注\",\"children\":[]},{\"level\":2,\"title\":\"获取关注/粉丝列表/好友列表\",\"slug\":\"获取关注-粉丝列表-好友列表\",\"link\":\"#获取关注-粉丝列表-好友列表\",\"children\":[{\"level\":3,\"title\":\"亮点\",\"slug\":\"亮点\",\"link\":\"#亮点\",\"children\":[]}]}],\"readingTime\":{\"minutes\":0.63,\"words\":188},\"filePathRelative\":\"guide/relation.md\",\"autoDesc\":true}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
