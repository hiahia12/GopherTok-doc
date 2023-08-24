<template><div><h1 id="点赞" tabindex="-1"><a class="header-anchor" href="#点赞" aria-hidden="true">#</a> 点赞</h1>
<h2 id="接口设计" tabindex="-1"><a class="header-anchor" href="#接口设计" aria-hidden="true">#</a> 接口设计</h2>
<h4 id="点赞-取消点赞" tabindex="-1"><a class="header-anchor" href="#点赞-取消点赞" aria-hidden="true">#</a> 点赞 &amp;&amp; 取消点赞</h4>
<p><code v-pre>/douyin/favorite/action</code> - <strong>点赞操作</strong></p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>type BaseResponse {
	Code    int64  `json:"status_code"` // 状态码，0-成功，其他值-失败
	Message string `json:"status_msg,omitempty"` // 返回状态描述
}

type (
	FavorReq {
		Video_id    int64  `form:"video_id"` // 对应视频id
		Action_type int64  `form:"action_type"`  // 1-点赞，2-取消点赞
		Token       string `form:"token"` // 用户鉴权token  
	}
	FavorResp {
		BaseResponse
	}
)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="基本流程" tabindex="-1"><a class="header-anchor" href="#基本流程" aria-hidden="true">#</a> 基本流程</h5>
<p>已登录用户可以对视频进行点赞以及取消点赞操作。</p>
<ol>
<li>
<p>用户在客户端中视频界面，点击喜欢按钮，客户端<strong>向服务端发起发送消息请求</strong></p>
</li>
<li>
<p>服务端接收请求，首先<strong>对发起请求的用户信息进行鉴权</strong>。</p>
<p>若未登录，则返回请先登录提示信息</p>
<p>若已登录，则校验用户 ID 和视频 ID 合法性、关系操作合法性。</p>
<p>若不合法，则返回 ID 或操作不合法提示信息</p>
<p>若已登录，则校验该用户是否已经点赞该视频</p>
<p>并将结果反应为点赞按钮的颜色</p>
</li>
<li>
<p>点击喜欢按钮，若已经点赞则请求类型为2，对该视频点赞，</p>
<p>​                           若没有点赞过则请求类型为1，取消点赞</p>
</li>
<li>
<p>客户端接收请求，在视频界面显示操作结果</p>
</li>
</ol>
<h4 id="用户的点赞列表" tabindex="-1"><a class="header-anchor" href="#用户的点赞列表" aria-hidden="true">#</a> 用户的点赞列表</h4>
<p><code v-pre>/douyin/favorite/list</code> - <strong>点赞列表</strong></p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>type BaseResponse {
	Code    int64  `json:"status_code"` // 状态码，0-成功，其他值-失败
	Message string `json:"status_msg,omitempty"` // 返回状态描述
}

type (
    FavorlistReq {
		UserId int64  `form:"user_id"` // 用户id
		Token  string `form:"token"` // 用户鉴权token
	}
	FavorlistResp {
		BaseResponse
		Videos []video `json:"videos"` //返回的消息列表
	}
	author {  
		ID              int64  `json:"id"` // 用户id
		Name            string `json:"name"` // 用户名
		FollowCount     int64  `json:"follow_count"` // 关注数
		FollowerCount   int64  `json:"follower_count"` // 粉丝数
		IsFollow        bool   `json:"is_follow"` // 该用户是否关注此作者
		Avatar          string `json:"avatar"` // 头像
		BackgroundImage string `json:"background_image"` // 背景图
		Signature       string `json:"signature"` // 签名
		TotalFavorited  string `json:"total_favorited"` // 总的喜欢数目
		WorkCount       int64  `json:"work_count"` // 作品数
		FavoriteCount   int64  `json:"favorite_count"` // 喜欢数目
	}

	video {
		ID            int64  `json:"id"` // 视频id
		Author        author `json:"author"` // 作者
		PlayURL       string `json:"play_url"` // 
		CoverURL      string `json:"cover_url"` // 
		FavoriteCount int64  `json:"favorite_count"` // 点赞数
		CommentCount  int64  `json:"comment_count"` // 评论数
		IsFavorite    bool   `json:"is_favorite"` // 当前用户是否点赞该视频
		Title         string `json:"title"` // 标题
	}
)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="基本流程-1" tabindex="-1"><a class="header-anchor" href="#基本流程-1" aria-hidden="true">#</a> 基本流程</h5>
<p>已登录用户可以查看自己与其他用户的点赞列表。</p>
<ol>
<li>
<p>用户在客户端中自己的主页或者其他用户个人主页点击喜欢按钮，客户端向服务端<strong>发送喜欢列表查询请求</strong></p>
</li>
<li>
<p>服务端接收请求，首先<strong>对发起请求的用户信息进行鉴权</strong>。</p>
<p>若未登录，则返回请先登录提示信息</p>
<p>若已登录，则校验用户 ID 和视频 ID 合法性、关系操作合法性。</p>
<p>若不合法，则返回 ID 或操作不合法提示信息</p>
<p>若合法，则在数据库中<strong>查询该用户喜欢的视频</strong>，并返回包含列表信息数据的响应信息</p>
</li>
<li>
<p>客户端接收响应信息，在主页界面显示列表信息</p>
</li>
</ol>
<h2 id="设计亮点" tabindex="-1"><a class="header-anchor" href="#设计亮点" aria-hidden="true">#</a> 设计亮点</h2>
<ul>
<li>
<p><strong>redis</strong></p>
<p>使用Redis提供的原子性操作，确保点赞操作的完整性和一致性。</p>
<p>使用Redis支持的持久化功能，将点赞数据持久化到硬盘中，以防止数据丢失。</p>
<p>使用Redis提供了分布式服务的支持，将点赞数据分布在多个Redis节点上，以提高系统的可扩展性和容错性。</p>
</li>
</ul>
</div></template>


