import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as i,c as t,d as e}from"./app-c6e67914.js";const s={},o=e('<h1 id="点赞" tabindex="-1"><a class="header-anchor" href="#点赞" aria-hidden="true">#</a> 点赞</h1><h2 id="接口设计" tabindex="-1"><a class="header-anchor" href="#接口设计" aria-hidden="true">#</a> 接口设计</h2><h4 id="点赞-取消点赞" tabindex="-1"><a class="header-anchor" href="#点赞-取消点赞" aria-hidden="true">#</a> 点赞 &amp;&amp; 取消点赞</h4><p><code>/douyin/favorite/action</code> - <strong>点赞操作</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>type BaseResponse {\n	Code    int64  `json:&quot;status_code&quot;` // 状态码，0-成功，其他值-失败\n	Message string `json:&quot;status_msg,omitempty&quot;` // 返回状态描述\n}\n\ntype (\n	FavorReq {\n		Video_id    int64  `form:&quot;video_id&quot;` // 对应视频id\n		Action_type int64  `form:&quot;action_type&quot;`  // 1-点赞，2-取消点赞\n		Token       string `form:&quot;token&quot;` // 用户鉴权token  \n	}\n	FavorResp {\n		BaseResponse\n	}\n)\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="基本流程" tabindex="-1"><a class="header-anchor" href="#基本流程" aria-hidden="true">#</a> 基本流程</h5><p>已登录用户可以对视频进行点赞以及取消点赞操作。</p><ol><li><p>用户在客户端中视频界面，点击喜欢按钮，客户端<strong>向服务端发起发送消息请求</strong></p></li><li><p>服务端接收请求，首先<strong>对发起请求的用户信息进行鉴权</strong>。</p><p>若未登录，则返回请先登录提示信息</p><p>若已登录，则校验用户 ID 和视频 ID 合法性、关系操作合法性。</p><p>若不合法，则返回 ID 或操作不合法提示信息</p><p>若已登录，则校验该用户是否已经点赞该视频</p><p>并将结果反应为点赞按钮的颜色</p></li><li><p>点击喜欢按钮，若已经点赞则请求类型为2，对该视频点赞，</p><p>​ 若没有点赞过则请求类型为1，取消点赞</p></li><li><p>客户端接收请求，在视频界面显示操作结果</p></li></ol><h4 id="用户的点赞列表" tabindex="-1"><a class="header-anchor" href="#用户的点赞列表" aria-hidden="true">#</a> 用户的点赞列表</h4><p><code>/douyin/favorite/list</code> - <strong>点赞列表</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>type BaseResponse {\n	Code    int64  `json:&quot;status_code&quot;` // 状态码，0-成功，其他值-失败\n	Message string `json:&quot;status_msg,omitempty&quot;` // 返回状态描述\n}\n\ntype (\n    FavorlistReq {\n		UserId int64  `form:&quot;user_id&quot;` // 用户id\n		Token  string `form:&quot;token&quot;` // 用户鉴权token\n	}\n	FavorlistResp {\n		BaseResponse\n		Videos []video `json:&quot;videos&quot;` //返回的消息列表\n	}\n	author {  \n		ID              int64  `json:&quot;id&quot;` // 用户id\n		Name            string `json:&quot;name&quot;` // 用户名\n		FollowCount     int64  `json:&quot;follow_count&quot;` // 关注数\n		FollowerCount   int64  `json:&quot;follower_count&quot;` // 粉丝数\n		IsFollow        bool   `json:&quot;is_follow&quot;` // 该用户是否关注此作者\n		Avatar          string `json:&quot;avatar&quot;` // 头像\n		BackgroundImage string `json:&quot;background_image&quot;` // 背景图\n		Signature       string `json:&quot;signature&quot;` // 签名\n		TotalFavorited  string `json:&quot;total_favorited&quot;` // 总的喜欢数目\n		WorkCount       int64  `json:&quot;work_count&quot;` // 作品数\n		FavoriteCount   int64  `json:&quot;favorite_count&quot;` // 喜欢数目\n	}\n\n	video {\n		ID            int64  `json:&quot;id&quot;` // 视频id\n		Author        author `json:&quot;author&quot;` // 作者\n		PlayURL       string `json:&quot;play_url&quot;` // \n		CoverURL      string `json:&quot;cover_url&quot;` // \n		FavoriteCount int64  `json:&quot;favorite_count&quot;` // 点赞数\n		CommentCount  int64  `json:&quot;comment_count&quot;` // 评论数\n		IsFavorite    bool   `json:&quot;is_favorite&quot;` // 当前用户是否点赞该视频\n		Title         string `json:&quot;title&quot;` // 标题\n	}\n)\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="基本流程-1" tabindex="-1"><a class="header-anchor" href="#基本流程-1" aria-hidden="true">#</a> 基本流程</h5><p>已登录用户可以查看自己与其他用户的点赞列表。</p><ol><li><p>用户在客户端中自己的主页或者其他用户个人主页点击喜欢按钮，客户端向服务端<strong>发送喜欢列表查询请求</strong></p></li><li><p>服务端接收请求，首先<strong>对发起请求的用户信息进行鉴权</strong>。</p><p>若未登录，则返回请先登录提示信息</p><p>若已登录，则校验用户 ID 和视频 ID 合法性、关系操作合法性。</p><p>若不合法，则返回 ID 或操作不合法提示信息</p><p>若合法，则在数据库中<strong>查询该用户喜欢的视频</strong>，并返回包含列表信息数据的响应信息</p></li><li><p>客户端接收响应信息，在主页界面显示列表信息</p></li></ol><h2 id="设计亮点" tabindex="-1"><a class="header-anchor" href="#设计亮点" aria-hidden="true">#</a> 设计亮点</h2><ul><li><p><strong>redis</strong></p><p>使用Redis提供的原子性操作，确保点赞操作的完整性和一致性。</p><p>使用Redis支持的持久化功能，将点赞数据持久化到硬盘中，以防止数据丢失。</p><p>使用Redis提供了分布式服务的支持，将点赞数据分布在多个Redis节点上，以提高系统的可扩展性和容错性。</p></li></ul>',16),d=[o];function a(l,r){return i(),t("div",null,d)}const c=n(s,[["render",a],["__file","favor.html.vue"]]);export{c as default};