<template><div><h1 id="relation" tabindex="-1"><a class="header-anchor" href="#relation" aria-hidden="true">#</a> Relation</h1>
<p>该模块包含关注操作，获取关注、粉丝和好友列表。数据库使用mysql和redis,mysql和redis间数据同步使用kafka。</p>
<h2 id="关注-取消关注" tabindex="-1"><a class="header-anchor" href="#关注-取消关注" aria-hidden="true">#</a> 关注 &amp;&amp; 取消关注</h2>
<ul>
<li>通过jwt校验身份</li>
<li>校验传入用户id是否存在，关注存在情况</li>
<li>通过redis实现关注和取消关注操作</li>
<li>通过kafka进行异步操作将消息存入MySQL</li>
<li>更新关注数、粉丝数和好友数</li>
</ul>
<h2 id="获取关注-粉丝列表-好友列表" tabindex="-1"><a class="header-anchor" href="#获取关注-粉丝列表-好友列表" aria-hidden="true">#</a> 获取关注/粉丝列表/好友列表</h2>
<ul>
<li>通过jwt校验身份</li>
<li>校验传入用户id是否存在</li>
<li>从MySQL中查询关注信息,调用user接口获取user信息</li>
</ul>
<h3 id="亮点" tabindex="-1"><a class="header-anchor" href="#亮点" aria-hidden="true">#</a> 亮点</h3>
<ul>
<li>调用user接口获取用户信息时采用并发调用，减少响应时间</li>
</ul>
</div></template>


