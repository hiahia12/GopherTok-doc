<template><div><h1 id="gophertok" tabindex="-1"><a class="header-anchor" href="#gophertok" aria-hidden="true">#</a> GopherTok</h1>
<table>
<thead>
<tr>
<th><img src="https://raw.githubusercontent.com/liuxianloveqiqi/Xian-imagehost/main/image/202308222108323.png" alt="{09951663-C990-6AA2-14C8-28D9C1DDBDCD}" style="zoom: 25%;" /></th>
<th>第六届字节跳动青训营大项目作品，使用go-zero搭建的微服务项目，由<a href="https://github.com/GophersTeam/GopherTok" target="_blank" rel="noopener noreferrer">gopher小队<ExternalLinkIcon/></a>完成，一个简易版抖音项目</th>
</tr>
</thead>
</table>
<h2 id="架构" tabindex="-1"><a class="header-anchor" href="#架构" aria-hidden="true">#</a> 架构</h2>
<figure><img src="https://raw.githubusercontent.com/liuxianloveqiqi/Xian-imagehost/main/image/202308230226461.png" alt="eb4302aa8c255a470e8be4becfda63ad" tabindex="0" loading="lazy"><figcaption>eb4302aa8c255a470e8be4becfda63ad</figcaption></figure>
<h2 id="🚀技术栈" tabindex="-1"><a class="header-anchor" href="#🚀技术栈" aria-hidden="true">#</a> 🚀技术栈</h2>
<table>
<thead>
<tr>
<th style="text-align:left">功能</th>
<th>实现</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">http框架</td>
<td>go-zero</td>
</tr>
<tr>
<td style="text-align:left">rpc框架</td>
<td>go-zero</td>
</tr>
<tr>
<td style="text-align:left">orm框架</td>
<td>gorm</td>
</tr>
<tr>
<td style="text-align:left">数据库</td>
<td>Innodb-cluster,redis-cluster,mongodb</td>
</tr>
<tr>
<td style="text-align:left">对象存储</td>
<td>腾讯云cos,minio</td>
</tr>
<tr>
<td style="text-align:left">服务发现、注册与配置中心</td>
<td>etcd,nacos</td>
</tr>
<tr>
<td style="text-align:left">链路追踪</td>
<td>jaeger</td>
</tr>
<tr>
<td style="text-align:left">服务监控</td>
<td>prometheus,grafana</td>
</tr>
<tr>
<td style="text-align:left">消息队列</td>
<td>kafka</td>
</tr>
<tr>
<td style="text-align:left">日志搜集</td>
<td>filebeat,go-stash,elasticsearch,kibana</td>
</tr>
<tr>
<td style="text-align:left">网关</td>
<td>traefik</td>
</tr>
<tr>
<td style="text-align:left">部署</td>
<td>Docker,docer-compose</td>
</tr>
<tr>
<td style="text-align:left">CI/CD</td>
<td>Github Action</td>
</tr>
</tbody>
</table>
<h2 id="高可用" tabindex="-1"><a class="header-anchor" href="#高可用" aria-hidden="true">#</a> 高可用</h2>
<ul>
<li>mysql选择<code v-pre>innodb-cluster</code></li>
</ul>
<figure><img src="https://raw.githubusercontent.com/liuxianloveqiqi/Xian-imagehost/main/image/image-20230814172330152.png" alt="image-20230814172330152" tabindex="0" loading="lazy"><figcaption>image-20230814172330152</figcaption></figure>
<ul>
<li>redis选择<code v-pre>redis-cluster</code></li>
</ul>
<figure><img src="https://raw.githubusercontent.com/liuxianloveqiqi/Xian-imagehost/main/image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3lyeDQyMDkwOQ==,size_16,color_FFFFFF,t_70.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<ul>
<li>minio集群</li>
</ul>
<figure><img src="https://raw.githubusercontent.com/liuxianloveqiqi/Xian-imagehost/main/image/a36949e0b971475499fd9ec95ad3b32d~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0-20230718162200891-20230814172546027.awebp" alt="MinIO分布式集群架构" tabindex="0" loading="lazy"><figcaption>MinIO分布式集群架构</figcaption></figure>
<p>四个节点</p>
<figure><img src="https://raw.githubusercontent.com/liuxianloveqiqi/Xian-imagehost/main/image/image-20230816101826428.png" alt="image-20230816101826428" tabindex="0" loading="lazy"><figcaption>image-20230816101826428</figcaption></figure>
<ul>
<li>kafka集群</li>
</ul>
<figure><img src="https://raw.githubusercontent.com/liuxianloveqiqi/Xian-imagehost/main/image/image-20230816101130893.png" alt="image-20230816101130893" tabindex="0" loading="lazy"><figcaption>image-20230816101130893</figcaption></figure>
<p>3节点</p>
<figure><img src="https://raw.githubusercontent.com/liuxianloveqiqi/Xian-imagehost/main/image/image-20230816101331794.png" alt="image-20230816101331794" tabindex="0" loading="lazy"><figcaption>image-20230816101331794</figcaption></figure>
<ul>
<li>服务的<code v-pre>api</code>和<code v-pre>rpc</code>启动多个do<code v-pre>cker实例，api使用</code>traefik<code v-pre>负载均衡，</code>rpc<code v-pre>通过</code>etcd`实现负载，保证服务的可靠性，高峰时期可以轻松扩容</li>
</ul>
<h2 id="高并发" tabindex="-1"><a class="header-anchor" href="#高并发" aria-hidden="true">#</a> 高并发</h2>
<ul>
<li>
<p>调用各个服务的<code v-pre>rpc</code>时采用并发调用，大大减少了响应时间</p>
</li>
<li>
<p>讲高频率的数据采用<code v-pre>redis</code>作缓存，减少了<code v-pre>mysql</code>压力</p>
</li>
<li>
<p>使用<code v-pre>kafka</code>异步写入<code v-pre>mysql</code>，增加系统吞吐量</p>
</li>
</ul>
<h2 id="高性能" tabindex="-1"><a class="header-anchor" href="#高性能" aria-hidden="true">#</a> 高性能</h2>
<ul>
<li>kafka采用聚集写入，大大减少磁盘io和网络io</li>
</ul>
<h2 id="配置中心和服务发现、注册中心" tabindex="-1"><a class="header-anchor" href="#配置中心和服务发现、注册中心" aria-hidden="true">#</a> 配置中心和服务发现、注册中心</h2>
<p>nacos作为配置中心</p>
<figure><img src="https://raw.githubusercontent.com/liuxianloveqiqi/Xian-imagehost/main/image/image-20230818163632603.png" alt="image-20230818163632603" tabindex="0" loading="lazy"><figcaption>image-20230818163632603</figcaption></figure>
<p>etcd作为服务发现和注册中心</p>
<figure><img src="https://raw.githubusercontent.com/liuxianloveqiqi/Xian-imagehost/main/image/e45ceb303cceb5ea188b8fa11f66c768.png" alt="e45ceb303cceb5ea188b8fa11f66c768" tabindex="0" loading="lazy"><figcaption>e45ceb303cceb5ea188b8fa11f66c768</figcaption></figure>
<h2 id="链路追踪" tabindex="-1"><a class="header-anchor" href="#链路追踪" aria-hidden="true">#</a> 链路追踪</h2>
<p>使用<code v-pre>jaeger</code>作为链路追踪</p>
<figure><img src="https://raw.githubusercontent.com/liuxianloveqiqi/Xian-imagehost/main/image/796364212238fb72b302c76a95f124b1.png" alt="796364212238fb72b302c76a95f124b1" tabindex="0" loading="lazy"><figcaption>796364212238fb72b302c76a95f124b1</figcaption></figure>
<h2 id="日志搜集" tabindex="-1"><a class="header-anchor" href="#日志搜集" aria-hidden="true">#</a> 日志搜集</h2>
<figure><img src="https://raw.githubusercontent.com/liuxianloveqiqi/Xian-imagehost/main/image/image-20230818164131821.png" alt="image-20230818164131821" tabindex="0" loading="lazy"><figcaption>image-20230818164131821</figcaption></figure>
<p><code v-pre>filebeat</code>收集业务日志，然后将日志输出到<code v-pre>kafka</code>中作为缓冲，<code v-pre>go-stash</code>获取<code v-pre>kafka</code>中日志根据配置过滤字段，然后将过滤后的字段输出到<code v-pre>elasticsearch</code>中，最后由<code v-pre>kibana</code>负责呈现日志</p>
<figure><img src="https://raw.githubusercontent.com/liuxianloveqiqi/Xian-imagehost/main/image/39ca160fbd2b2b385622deef2e79ba03.png" alt="39ca160fbd2b2b385622deef2e79ba03" tabindex="0" loading="lazy"><figcaption>39ca160fbd2b2b385622deef2e79ba03</figcaption></figure>
<h2 id="监控" tabindex="-1"><a class="header-anchor" href="#监控" aria-hidden="true">#</a> 监控</h2>
<p>使用<code v-pre>prometheus</code>进行服务监控</p>
<figure><img src="https://raw.githubusercontent.com/liuxianloveqiqi/Xian-imagehost/main/image/42ba4597865261dcddcd1545d78c3d4f.png" alt="42ba4597865261dcddcd1545d78c3d4f" tabindex="0" loading="lazy"><figcaption>42ba4597865261dcddcd1545d78c3d4f</figcaption></figure>
<p>再由<code v-pre>grafana</code>进行可视化呈现</p>
<figure><img src="https://raw.githubusercontent.com/liuxianloveqiqi/Xian-imagehost/main/image/image-20230818160820149.png" alt="image-20230818160820149" tabindex="0" loading="lazy"><figcaption>image-20230818160820149</figcaption></figure>
<h2 id="网关" tabindex="-1"><a class="header-anchor" href="#网关" aria-hidden="true">#</a> 网关</h2>
<p>使用<code v-pre>traefik</code>作为网关，根据路由规则将请求负载均衡到各个服务的<code v-pre>api</code>上面</p>
<figure><img src="https://raw.githubusercontent.com/liuxianloveqiqi/Xian-imagehost/main/image/image-20230818163032128.png" alt="image-20230818163032128" tabindex="0" loading="lazy"><figcaption>image-20230818163032128</figcaption></figure>
<p>再通过负载均衡到各个服务<code v-pre>api</code>容器实例</p>
<figure><img src="https://raw.githubusercontent.com/liuxianloveqiqi/Xian-imagehost/main/image/image-20230818164454219.png" alt="image-20230818164454219" tabindex="0" loading="lazy"><figcaption>image-20230818164454219</figcaption></figure>
<h2 id="ci-cd" tabindex="-1"><a class="header-anchor" href="#ci-cd" aria-hidden="true">#</a> CI/CD</h2>
<ul>
<li>使用<code v-pre>Github Action</code>进行CI/CD，每次提交上去后进行自动化测试</li>
<li>然后可以手动构建各个服务的镜像，构建好后自动推送到<code v-pre>dockerhub</code>上面</li>
<li>再ssh登录远程服务器，利用新的镜像和已经写好的<code v-pre>docker-compose</code>自动部署好新的容器</li>
</ul>
<h2 id="感谢" tabindex="-1"><a class="header-anchor" href="#感谢" aria-hidden="true">#</a> 感谢</h2>
<table>
<thead>
<tr>
<th style="text-align:center"><a href="https://youthcamp.bytedance.com/" target="_blank" rel="noopener noreferrer">字节跳动青训营<ExternalLinkIcon/></a></th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center"><img src="https://raw.githubusercontent.com/liuxianloveqiqi/Xian-imagehost/main/image/202308230232085.webp" alt="青训营" style="zoom: 67%;" /></td>
</tr>
</tbody>
</table>
<h2 id="许可证" tabindex="-1"><a class="header-anchor" href="#许可证" aria-hidden="true">#</a> 许可证</h2>
<p><strong>GopherTok</strong> 在 <strong>MIT</strong> 许可证下开源,请在遵循 <a href="https://github.com/MashiroC/begonia/blob/master/LICENSE" target="_blank" rel="noopener noreferrer">MIT 开源证书<ExternalLinkIcon/></a> 规则的前提下使用</p>
</div></template>


