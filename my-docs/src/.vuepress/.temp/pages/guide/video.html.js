export const data = JSON.parse("{\"key\":\"v-676a79ac\",\"path\":\"/guide/video.html\",\"title\":\"video\",\"lang\":\"zh-CN\",\"frontmatter\":{\"description\":\"发布视频\\r 支持三种方式存储，minio集群，腾讯云cos，本地，可通过nacos配置 流程 1. 首先计算出视频的sha256值，在redis中查询是否存在该值，若存在说明之前用户传过一样的视频，则直接从redis查询视频的url和封面的url,返回上传成功 2. 将计算出的sha256存入redis中 3. 拼接好文件路径 4. 使用ffmpeg截...\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://vuepress-theme-hope-docs-demo.netlify.app/guide/video.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"GopherTok\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"video\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"发布视频\\r 支持三种方式存储，minio集群，腾讯云cos，本地，可通过nacos配置 流程 1. 首先计算出视频的sha256值，在redis中查询是否存在该值，若存在说明之前用户传过一样的视频，则直接从redis查询视频的url和封面的url,返回上传成功 2. 将计算出的sha256存入redis中 3. 拼接好文件路径 4. 使用ffmpeg截...\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"Gopher\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"video\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"Gopher\\\",\\\"url\\\":\\\"https://github.com/GophersTeam\\\"}]}\"]]},\"headers\":[{\"level\":2,\"title\":\"发布视频\",\"slug\":\"发布视频\",\"link\":\"#发布视频\",\"children\":[{\"level\":3,\"title\":\"流程\",\"slug\":\"流程\",\"link\":\"#流程\",\"children\":[]}]},{\"level\":2,\"title\":\"查看用户发布的全部视频\",\"slug\":\"查看用户发布的全部视频\",\"link\":\"#查看用户发布的全部视频\",\"children\":[]},{\"level\":2,\"title\":\"视频流\",\"slug\":\"视频流\",\"link\":\"#视频流\",\"children\":[]},{\"level\":2,\"title\":\"mq\",\"slug\":\"mq\",\"link\":\"#mq\",\"children\":[]},{\"level\":2,\"title\":\"亮点\",\"slug\":\"亮点\",\"link\":\"#亮点\",\"children\":[]},{\"level\":2,\"title\":\"参考\",\"slug\":\"参考\",\"link\":\"#参考\",\"children\":[]}],\"readingTime\":{\"minutes\":1.69,\"words\":506},\"filePathRelative\":\"guide/video.md\",\"autoDesc\":true}")

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
