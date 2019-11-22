<template>
	<view class="Task">
		<!-- tab 标题 -->
		<view class="tab_title">
			<view class="title_item" v-for="(item, idx) in tab_titles" :key="idx">
				<text :class="{active:tabbar_title_idx==idx}">{{ item.text}}</text>
				<view v-show="tabbar_title_idx==idx"></view>
			</view>
		</view>
		
		<!-- 内容 -->
		<view class="task_centent">
			<view class="task_item">
				<view class="item_left">
					<image src="../../../static/imgs/douyinlogo.png" mode=""></image>
				</view>
				<view class="item_right">
					<view class="account">抖音账号: DAS45155451</view>
					<view class="task_cent">
						<view class="cent_title">任务内容:</view>
						<view class="cent_item">
							<view>关注</view>
							<text>+</text>
						</view>
						<view class="cent_item">
							<view>关注</view>
							<text>+</text>
						</view>
						<view class="cent_item">
							<view>关注</view>
							<text>+</text>
						</view>
						<view class="cent_item">
							<view>关注</view>
							<text>+</text>
						</view>
						<view class="cent_item">
							<view>关注</view>
							<text>+</text>
						</view>
						<view class="cent_item">
							<view>关注</view>
							<text>+</text>
						</view>
						<view class="cent_item">
							<view>关注</view>
							<text>+</text>
						</view>
					</view>
					<view class="reward">
						<text>任务奖励5金币</text>
						<view>领取任务</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			tab_titles: [
				{
					text: '全部任务'
				},
				{
					text: '点赞'
				},
				{
					text: '关注'
				},
				{
					text: '转发'
				},
				{
					text: '评论'
				}
			],
			tabbar_title_idx:0
		};
	},
	methods:{
		
	}
};
</script>

<style lang="less">
page {
	background: #f7f7f7;
}
.Task {
	width: 100%;
	overflow: hidden;

	// 标题
	.tab_title {
		width: 100%;
		height: 80upx;
		background: #ffc738;
		display: flex;
		justify-content: space-between;

		.title_item {
			width: 138upx;
			height: 80upx;
			line-height: 80upx;
			font-size:24upx;
			text-align: center;
			position: relative;
			
			view{
				width:40upx;
				height:6upx;
				background:rgba(0,0,0,1);
				position: absolute;
				left: 50%;
				margin-left: -20upx;
				bottom: 0;
				z-index: 5;
			}
			text{
				color: #666;
			}
			text.active{
				color: #000;
			}
		}
	}

	// 内容
	.task_centent{
		width: 100%;
		overflow: hidden;
		
		.task_item{
			width: 100%;
			background: #FFFFFF;
			overflow: hidden;
			display: flex;
			
			.item_left{
				width:200upx;
				height:200upx;
				background:rgba(23,11,26,1);
				border-radius:10upx;
				margin: 30upx 0 0 30upx;
				
				image{
					width: 100%;
					height: 100%;
				}
			}
			.item_right{
				width: 478upx;
				overflow: hidden;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				margin: 30upx 0 0 12upx;
				
				.account{
					width: 100%;
					height:30upx;
					font-size:30upx;
					font-weight:bold;
					color:rgba(0,0,0,1);
					overflow: hidden;
					text-overflow:ellipsis;
					white-space: nowrap;
				}
				.task_cent{
					width: 100%;
					overflow: hidden;
					display: flex;
					align-items: center;
					flex-flow: wrap;
					margin-top: 25upx;
					
					.cent_title{
						font-size:24upx;
						font-weight:bold;
						color:rgba(0,0,0,1);
						margin-right: 16upx;
					}
					.cent_item{
						display: flex;
						height:32upx;
						align-items: center;
						font-size:24upx;
						margin-top: 4upx;
						margin-bottom: 10upx;
						
						view{
							display: inline-block;
							padding:0 20upx;
							height:32upx;
							line-height: 30upx;
							font-size:20upx;
							background:linear-gradient(90deg,rgba(255,199,56,1) 0%,rgba(255,211,98,1) 100%);
						}
						text{
							margin:0 10upx;
						}
					}
				}
				.reward{
					width: 100%;
					height: 40upx;
					display: flex;
					justify-content: space-between;
					align-items: center;
					margin-top: 15upx;
					margin-bottom: 30upx;
					
					text{
						font-size:30upx;
						font-weight:bold;
						color:rgba(255,47,47,1);
					}
					view{
						width:160upx;
						height:40upx;
						border:2upx solid rgba(0,0,0,1);
						background:linear-gradient(90deg,rgba(31,36,45,1) 0%,rgba(81,84,86,1) 100%);
						border-radius:4upx;
						text-align: center;
						line-height: 40upx;
						font-size:24upx;
						color:rgba(255,184,0,1);
					}
				}
			}
		}
	}
}
</style>
