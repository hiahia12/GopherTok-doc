export const data = JSON.parse("{\"key\":\"v-8f93e6fc\",\"path\":\"/guide/user.html\",\"title\":\"User\",\"lang\":\"zh-CN\",\"frontmatter\":{\"description\":\"用户注册 流程 首先对用户名和密码进行格式校验，这里使用的是vilidator包 再从redis中查询是否该用户名已经存在，若存在则直接返回用户名已经存在，请重新注册 校验通过后，通过雪花算法生成userid，将userid、用户名和进行加盐加密的密码写入kafka，再生成token,然后直接返回信息 kafka消费消息，再加上返回随机图片的url作为...\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://vuepress-theme-hope-docs-demo.netlify.app/guide/user.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"GopherTok\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"User\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"用户注册 流程 首先对用户名和密码进行格式校验，这里使用的是vilidator包 再从redis中查询是否该用户名已经存在，若存在则直接返回用户名已经存在，请重新注册 校验通过后，通过雪花算法生成userid，将userid、用户名和进行加盐加密的密码写入kafka，再生成token,然后直接返回信息 kafka消费消息，再加上返回随机图片的url作为...\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"Gopher\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"User\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"Gopher\\\",\\\"url\\\":\\\"https://github.com/GophersTeam\\\"}]}\"]]},\"headers\":[{\"level\":2,\"title\":\"用户注册\",\"slug\":\"用户注册\",\"link\":\"#用户注册\",\"children\":[{\"level\":3,\"title\":\"流程\",\"slug\":\"流程\",\"link\":\"#流程\",\"children\":[]}]},{\"level\":2,\"title\":\"用户登录\",\"slug\":\"用户登录\",\"link\":\"#用户登录\",\"children\":[]},{\"level\":2,\"title\":\"用户信息\",\"slug\":\"用户信息\",\"link\":\"#用户信息\",\"children\":[]},{\"level\":2,\"title\":\"jwt双token\",\"slug\":\"jwt双token\",\"link\":\"#jwt双token\",\"children\":[]},{\"level\":2,\"title\":\"亮点\",\"slug\":\"亮点\",\"link\":\"#亮点\",\"children\":[]}],\"readingTime\":{\"minutes\":1.86,\"words\":559},\"filePathRelative\":\"guide/user.md\",\"autoDesc\":true}")

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
