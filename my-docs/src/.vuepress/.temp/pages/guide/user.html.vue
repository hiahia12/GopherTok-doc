<template><div><h1 id="user" tabindex="-1"><a class="header-anchor" href="#user" aria-hidden="true">#</a> User</h1>
<h2 id="用户注册" tabindex="-1"><a class="header-anchor" href="#用户注册" aria-hidden="true">#</a> 用户注册</h2>
<h3 id="流程" tabindex="-1"><a class="header-anchor" href="#流程" aria-hidden="true">#</a> 流程</h3>
<p>首先对用户名和密码进行格式校验，这里使用的是vilidator包</p>
<p>再从redis中查询是否该用户名已经存在，若存在则直接返回用户名已经存在，请重新注册</p>
<p>校验通过后，通过雪花算法生成user_id，将user_id、用户名和进行加盐加密的密码写入kafka，再生成token,然后直接返回信息</p>
<p>kafka消费消息，再加上返回随机图片的url作为头像和背景的url，个性签名也是请求能返回随机个性签名的网站，然后将用户名写入redis，用户信息写入mysql</p>
<h2 id="用户登录" tabindex="-1"><a class="header-anchor" href="#用户登录" aria-hidden="true">#</a> 用户登录</h2>
<p>首先校验用户名和密码的格式</p>
<p>通过后先从redis查询该用户名是否存在，不存在直接返回错误，</p>
<p>存在后进行密码校验，根据盐值和加密算法校验密码</p>
<p>通过后同样返回token</p>
<h2 id="用户信息" tabindex="-1"><a class="header-anchor" href="#用户信息" aria-hidden="true">#</a> 用户信息</h2>
<p>首先通过jwt中间件验证身份，通过后获取用户id</p>
<p>根据id获取用户信息，并发调用其他rpc拼接最终的返回信息</p>
<h2 id="jwt双token" tabindex="-1"><a class="header-anchor" href="#jwt双token" aria-hidden="true">#</a> jwt双token</h2>
<ol>
<li><code v-pre>accessToken</code>的存在，保证了登录态的正常验证，因其过期时间的短暂也保证了帐号的安全性</li>
<li><code v-pre>refreshToekn</code>的存在，保证了用户（即使是非活跃用户）无需在短时间内进行反复的登陆操作来保证登录态的有效性，同时也保证了活跃用户的登录态可以一直存续而不需要进行重新登录，其反复刷新也防止某些不怀好意的人获取refreshToken后对用户帐号进行动手动脚的操作</li>
</ol>
<h2 id="亮点" tabindex="-1"><a class="header-anchor" href="#亮点" aria-hidden="true">#</a> 亮点</h2>
<ul>
<li>对于频繁查询的信息，比如用户名利用redis进行缓存</li>
<li>jwt双token的设计</li>
<li>密码进行加盐加密，盐值只有服务器知道，就算黑客知道加密算法也无法暴力破解</li>
<li>注册后通过kafka进行异步操作，存入用户信息</li>
<li>并发请求生成随机头像，背景图和个性签名的网站</li>
<li>并发调用其他服务的rpc，大大减少了响应时间</li>
</ul>
<h2 id="footer-粤icp备2023028963号" tabindex="-1"><a class="header-anchor" href="#footer-粤icp备2023028963号" aria-hidden="true">#</a> footer: <a href="https://beian.miit.gov.cn">粤ICP备2023028963号</a></h2>
</div></template>


