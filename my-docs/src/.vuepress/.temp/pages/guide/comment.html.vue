<template><div><h1 id="comment" tabindex="-1"><a class="header-anchor" href="#comment" aria-hidden="true">#</a> Comment</h1>
<h2 id="技术选型" tabindex="-1"><a class="header-anchor" href="#技术选型" aria-hidden="true">#</a> 技术选型</h2>
<p>mongoDB+redis+kafka</p>
<h2 id="执行流程" tabindex="-1"><a class="header-anchor" href="#执行流程" aria-hidden="true">#</a> 执行流程</h2>
<ul>
<li>
<p>写入评论：</p>
<ul>
<li>首先校验评论的格式</li>
<li>将评论信息如评论id、用户id、评论内容、评论时间等写入kafka</li>
<li>redis的评论数+1</li>
<li>返回评论信息</li>
</ul>
</li>
<li>
<p>kafka异步处理：</p>
<ul>
<li>kafka消费消息，会对评论进行审核，如果不合法则丢弃，并将redis评论数-1</li>
<li>如果合法则将评论信息写入mongoDB，</li>
</ul>
</li>
<li>
<p>读取评论：</p>
<ul>
<li>根据视频id从mongoDB中查询评论相关信息并做排序分页展示</li>
<li>根据用户id调用用户服务查询基本信息</li>
<li>拼接成最终的返回信息</li>
</ul>
</li>
</ul>
<h2 id="亮点" tabindex="-1"><a class="header-anchor" href="#亮点" aria-hidden="true">#</a> 亮点</h2>
<ul>
<li>选择mongoDB作为存储，首先评论是有并发需求的，最好基于内存实现，而使用redis这种简单的kv存储，不支持复杂的crud操作，如基本信息查询，分页展示，时间排序，评论状态修改等。<br>
其次评论可能需要添加其他维度的字段，使用mongoDB便于扩展，所以选择mongoDB作为存储</li>
<li>redis缓存评论数等信息，提高系统的吞吐量</li>
<li>使用消息队列，利用消息队列的有序性，对于并发写入的评论，可以保证写入顺序，异步处理如评论审核、落库等操作，提高系统的吞吐量</li>
<li>查询评论列表的用户信息时使用多协程并发查询，提高系统的吞吐量</li>
</ul>
</div></template>


