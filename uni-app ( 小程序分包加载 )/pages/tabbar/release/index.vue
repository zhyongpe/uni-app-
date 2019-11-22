<template>
	<view class="Release">
		
		<!-- 用户基本信息 -->
		<view class="public_title"><text>用户基本信息</text></view>
		<view class="user_info">
			<view class="release_public border_bottom">
				<view class="public_left">
					<image src="../../../static/imgs/douyingyi.png" mode=""></image>
					<text>抖音ID号</text>
				</view>
				<view class="public_right">
					<text>9655922418</text>
				</view>
			</view>
			<view class="release_public border_bottom">
				<view class="public_left">
					<image src="../../../static/imgs/douyingyi.png" mode=""></image>
					<text>任务链接</text>
				</view>
				<view class="public_right">
					<text>AJSDHASJ454644654</text>
				</view>
			</view>
		</view>
		
		<!-- 任务基本信息 -->
		<view class="public_title"><text>任务基本信息</text></view>
		<view class="task_information">
			<view class="release_public border_bottom">
				<view class="public_left">
					<image src="../../../static/imgs/douyingyi.png" mode=""></image>
					<text>任务平台</text>
				</view>
				<view class="public_right">
					<text>抖音</text>
				</view>
			</view>
			<view class="release_public">
				<view class="public_left">
					<image src="../../../static/imgs/douyingyi.png" mode=""></image>
					<text>任务类型</text>
				</view>
			</view>
			
			<view class="task_type">
				<view class="task_type_item">
					<view class="type_left">
						<view>浏览量</view>
						<text>(2金币)</text>
					</view>
					<view class="type_center">
						<view class="active">请选择数量</view>
						<image src="../../../static/imgs/dianzanhei.png" mode=""></image>
					</view>
					<view class="type_right">
						<view class="active">当前价格</view>
					</view>
				</view>
				<view class="task_type_item">
					<view class="type_left">
						<view>点赞</view>
						<text>(2金币)</text>
					</view>
					<view class="type_center">
						<view>5000</view>
						<image src="../../../static/imgs/dianzanhei.png" mode=""></image>
					</view>
					<view class="type_right">
						<view>10000金币</view>
					</view>
				</view>
			</view>
			
			<view class="prompt">
				<image src="../../../static/imgs/jingshi.png" mode=""></image>
				<text>下一项所选数量不能高于上一项</text>
			</view>
		</view>
		<view class="release_public border_bottom">
			<view class="public_left">
				<image src="../../../static/imgs/douyingyi.png" mode=""></image>
				<text>任务总次数</text>
			</view>
			<view class="public_right">
				<text>5000次</text>
			</view>
		</view>
		<view class="release_public border_bottom">
			<view class="public_left">
				<image src="../../../static/imgs/douyingyi.png" mode=""></image>
				<text>截止时间</text>
			</view>
			<view class="public_right">
				<text>2019-11-11</text>
				<image src="../../../static/imgs/dianzanhei.png" mode=""></image>
			</view>
		</view>
		
		<!-- 结算费用 -->
		<view class="public_title"><text>结算费用</text></view>
		<view class="settlement_fee">
			<view class="fee_item">
				<view class="fee_item_left public_fee">账户可用积分：</view>
				<view class="fee_item_center public_fee">2454</view>
				<view class="fee_item_right public_fee">
					<view>充值</view>
				</view>
			</view>
			<view class="fee_item">
				<view class="fee_item_left public_fee">该任务需积分：</view>
				<view class="fee_item_center public_fee">2454</view>
			</view>
		</view>
		
		<!-- 脚本 -->
		<view class="release_footer">
			<view class="common_btn auto">提交审核</view>
			<view class="prompt">
				<image src="../../../static/imgs/jingshi.png" mode=""></image>
				<text>下一项所选数量不能高于上一项</text>
			</view>
		</view>
	</view>
</template>

<script>
</script>

<style lang="less">
page{
	background: #F7F7F7;
}
.Release{
	width: 100%;
	overflow: hidden;
	
	.public_title{
		width: 100%;
		height: 100upx;
		display: flex;
		align-items: center;
		
		text{
			font-size:28upx;
			font-weight:bold;
			color:rgba(0,0,0,1);
			margin-left: 54upx;
		}
	}
	
	// 用户基本信息
	.user_info{
		width: 100%;
		overflow: hidden;
	}
	
	.border_bottom{
		border-bottom: 2upx #F7F7F7 solid;
	}
	.release_public{
		width: 100%;
		height:120upx;
		background:rgba(255,255,255,1);
		display: flex;
		justify-content: space-between;
		align-items: center;
		
		text{
			font-size: 30upx;
		}
		
		.public_left{
			height: 100%;
			display: flex;
			align-items: center;
			margin-left: 30upx;
			image{
				width:39upx;
				height:43upx;
				margin-right: 20upx;
			}
		}
		.public_right{
			height: 100%;
			display: flex;
			align-items: center;
			margin-right: 30upx;
			image{
				width:15px;
				height:25px;
				margin-left: 15upx;
			}
		}
	}
	
	// 任务基本信息
	.task_information{
		width: 100%;
		background: #FFFFFF;
		border-bottom: 2upx #F7F7F7 solid;
		overflow: hidden;
		
		
		.task_type{
			width: 100%;
			overflow: hidden;
			display: flex;
			flex-direction: column;
			align-items: center;
			
			.task_type_item{
				width:678upx;
				height:50upx;
				border:2upx solid rgba(0,0,0,1);
				border-radius:25upx;
				display: flex;
				justify-content: space-between;
				align-items: center;
				margin-top: 25upx;
				
				view,text{
					font-size: 24upx;
				}
				view.active{
					color: #999999;
				}
				
				.type_left{
					width: 220upx;
					height: 100%;
					display: flex;
					align-items: center;
					justify-content: space-between;
					background: #FFC738;
					border-right: 2upx #000 solid;
					border-radius: 25upx 0 0 25upx;
					
					view{
						margin-left: 35upx;
					}
					text{
						margin-right: 20upx;
					}
				}
				.type_center{
					width: 230upx;
					height: 100%;
					display: flex;
					justify-content: flex-end;
					align-items: center;
					
					image{
						width:22px;
						height:12px;
						margin:0 0 0 10upx;
					}
				}
				.type_right{
					width: 226upx;
					height: 100%;
					display: flex;
					align-items: center;
					justify-content: flex-end;
					
					view{
						margin-right: 24upx;
					}
				}
			}
		}
		.prompt{
			width: 100%;
			height: 120upx;
			display: flex;
			justify-content: center;
			align-items: center;
			
			image{
				width: 24upx;
				height: 24upx;
			}
			text{
				font-size:24upx;
				font-weight:bold;
				color:rgba(119,119,119,1);
				margin-left: 10upx;
			}
		}
	}

	// 结算费用
	.settlement_fee{
		width: 100%;
		overflow: hidden;
		
		.public_fee{
			width: 230upx;
			height: 120upx;
			display: flex;
			justify-content: center;
			align-items: center;
		}
		.fee_item{
			width: 100%;
			height: 120upx;
			display: flex;
			background: #FFFFFF;
			border-bottom: 2upx #F7F7F7 solid;
			
			.fee_item_left{
				font-size: 30upx;
				margin-left: 30upx;
			}
			.fee_item_center{
				font-size:36upx;
				font-weight: bold;
				color:rgba(0,0,0,1);
			}
			.fee_item_right{
				margin-right: 30upx;
				view{
					width:150upx;
					height:40upx;
					background:linear-gradient(90deg,rgba(31,36,45,1) 0%,rgba(81,84,86,1) 100%);
					box-shadow:0 5upx 4upx 0 rgba(0, 0, 0, 0.5);
					border-radius:20upx;
					font-size:24upx;
					color:rgba(255,184,0,1);
					text-align: center;
					line-height: 40upx;
				}
			}
		}
	}
	
	// 脚本
	.release_footer{
		width: 100%;
		overflow: hidden;
		margin-top: 50upx;
		
		.prompt{
			width: 100%;
			height: 30upx;
			overflow: hidden;
			margin: 30upx 0 60upx 0;
			display: flex;
			justify-content: center;
			align-items: center;
			
			image{
				width: 24upx;
				height: 24upx;
			}
			text{
				font-size:24upx;
				font-weight:bold;
				color:rgba(119,119,119,1);
				margin-left: 10upx;
			}
		}
	}
}
</style>
