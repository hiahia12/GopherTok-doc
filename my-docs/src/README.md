---
home: true
icon: home
title: 项目主页
heroImage: /logo.jpg
bgImage: https://theme-hope-assets.vuejs.press/bg/6-light.svg
bgImageDark: https://theme-hope-assets.vuejs.press/bg/6-dark.svg
bgImageStyle:
  background-attachment: fixed
heroText: GopherTok
tagline: 由Gopher小队创造的极简抖音项目。
actions:
  - text: 功能及展示 💡
    link: ./demo/
    type: primary

  - text: 文档
    link: ./guide/

highlights:
  - header: 技术栈
    description: 
    image:  /assets/image/layout.svg
    bgImage: https://theme-hope-assets.vuejs.press/bg/2-light.svg
    bgImageDark: https://theme-hope-assets.vuejs.press/bg/2-dark.svg
    bgImageStyle:
      background-repeat: repeat
      background-size: initial
    features:
      - title: go-zero
        details: http框架和rpc框架
        link: 

      - title: gorm
        details: orm框架
        link: 

      - title: Innodb-cluster,redis-cludter,mongodb
        details: 数据库
        link: 

      - title: minio,腾讯云cos
        details: 对象存储
        link: 

      - title: etcd
        details: 服务发现、注册中心
        link:
    
      - title: nacos
        details: 服务配置中心
        link:

      - title: jaeger
        details: 链路追踪
        link:

      - title: prometheus,grafana
        details: 服务监控
        link:

      - title: kafka
        details: 消息队列
        link:
     
      - title: filebeat,go-stash,elasticsearch,kibana
        details: 日志搜集
        link:
     
      - title: traefik
        details: 网关
        link:
     
      - title: Docker,docer-compose     
        details: 部署
        link:
     
      - title: Github Action
        details: CI/CD
        link:
     
  

  

  - header: 亮点
    image: /assets/image/features.svg
    bgImage: https://theme-hope-assets.vuejs.press/bg/1-light.svg
    bgImageDark: https://theme-hope-assets.vuejs.press/bg/1-dark.svg
    features:
      - title: 高可用
        details: 服务的api和rpc启动多个docker实例，api使用traefik负载均衡，rpc通过etcd`实现负载，保证服务的可靠性，高峰时期可以轻松扩容
        link:
      - title: 高并发
        details: 调用各个服务的rpc时采用并发调用，大大减少了响应时间; 讲高频率的数据采用redis作缓存，减少了mysql压力; 使用kafka异步写入mysql，增加系统吞吐量
        link:
      - title: 高性能
        details: kafka采用聚集写入，大大减少磁盘io和网络io
        link:

copyright: false
footer: <a href="https://beian.miit.gov.cn">粤ICP备2023028963号</a>
---
