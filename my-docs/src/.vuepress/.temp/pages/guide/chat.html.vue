<template><div><h1 id="chat" tabindex="-1"><a class="header-anchor" href="#chat" aria-hidden="true">#</a> chat</h1>
<h2 id="技术选型" tabindex="-1"><a class="header-anchor" href="#技术选型" aria-hidden="true">#</a> 技术选型</h2>
<p>MySQL+Redis</p>
<h2 id="数据库设计" tabindex="-1"><a class="header-anchor" href="#数据库设计" aria-hidden="true">#</a> 数据库设计</h2>
<p>消息表</p>
<table>
<thead>
<tr>
<th>字段</th>
<th>数据类型</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>id</td>
<td>bigint</td>
<td>主键id</td>
</tr>
<tr>
<td>from_user_id</td>
<td>bigint</td>
<td>发送方id</td>
</tr>
<tr>
<td>to_user_id</td>
<td>bigint</td>
<td>接收方id</td>
</tr>
<tr>
<td>content</td>
<td>varchar</td>
<td>消息内容</td>
</tr>
<tr>
<td>create_time</td>
<td>bigint</td>
<td>发送时间</td>
</tr>
</tbody>
</table>
<h2 id="亮点" tabindex="-1"><a class="header-anchor" href="#亮点" aria-hidden="true">#</a> 亮点</h2>
<ul>
<li>使用redis的map结构缓存用户的好友列表之间的最后一条消息，提高系统的吞吐量</li>
<li>使用雪花算法生成消息id，在分布式环境下保证消息id的唯一性</li>
</ul>
</div></template>


