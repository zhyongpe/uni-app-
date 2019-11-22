<template>
	<view class="Home" @tap="$publicMethod.navigateTo('/pages_release/index')">
		
		<!-- 收益信息 -->
		<view class="income">
			<view class="income_bj"><image src="../../../static/imgs/zhengzhang.png" mode=""></image></view>
			<view class="mask_layer"><image src="../../../static/imgs/xianmian.png" mode=""></image></view>
			<view class="income_content">
				<view class="income_user income_list">
					<image src="../../../static/imgs/paimingtouxiang.png" mode=""></image>
					<text>16607962120</text>
				</view>
				<view class="income_money income_list">
					<view>124.00</view>
					<text>今日收益(元)</text>
				</view>
				<view class="income_money income_list">
					<view>7563.00</view>
					<text>累计收益(元)</text>
				</view>
			</view>
		</view>
		
		<!-- 系统公告 -->
		<view class="announcement auto">
			<view class="xtgg_img">
				<image src="../../../static/imgs/xtgg.png" mode=""></image>
			</view>
			<view class="xtgg_text">恭喜“16607962120”成功提现200元</view>
		</view>
		
		<!-- 广告宣传图 -->
		<view class="banner auto">
			<swiper class="swiper" @change="obtain_current">
				<swiper-item v-for="(item,idx) in swiper_img" :key="idx">
					<image :src="item.img" mode=""></image>
				</swiper-item>
			</swiper>
			<view class="pointing_point">
				<text v-for="(item,idx) in swiper_img" :key="idx" :class="{active:idx==currentNum}"></text>
			</view>
		</view>
		
		<!-- 功能列表 -->
		<view class="features_list auto">
			<view v-for="(item,idx) in features_list" :key="idx">
				<image :src="item.img" mode=""></image>
				<text>{{item.text}}</text>
			</view>
		</view>
		
		<!-- 脚本广告 -->
		<view class="footer_banner auto">
			<image src="../../../static/imgs/guanggaowei.png" mode=""></image>
		</view>
		
	</view>
</template>

<script>
export default {
	data() {
		return {
			// 广告宣传图
			swiper_img:[{
				img:"../../../static/imgs/guanggao.png"
			},
			{
				img:"../../../static/imgs/guanggao.png"
			},
			{
				img:"../../../static/imgs/guanggao.png"
			}],
			currentNum:0,
			
			// 功能列表
			features_list:[{
				img:"../../../static/imgs/renwudating.png",
				text:"任务大厅"
			},
			{
				img:"../../../static/imgs/chanpintuiguang.png",
				text:"产品推广"
			},
			{
				img:"../../../static/imgs/pingtaites.png",
				text:"平台特色"
			},
			{
				img:"../../../static/imgs/sypaihang.png",
				text:"收益排行"
			}]
		};
	},
	methods:{
		
		// 广告宣传图
		obtain_current(e){
			this.currentNum = e.detail.current;
		}
	}
};
</script>

<style lang="less">
page {
	background: #ffffff;
}
.Home {
	width: 100%;
	overflow: hidden;
	margin-bottom: 40upx;
	
	// 收益信息
	.income{
		width: 100%;
		background: #FFC738;
		height: 220upx;
		overflow: hidden;
		position: relative;
	
		.income_bj{
			position: absolute;
			width: 690upx;
			height: 220upx;
			left: 30upx;
			top: 0;
			z-index: 5;
			
			image{
				width: 100%;
				height: 100%;
			}
		}
		.mask_layer{
			position: absolute;
			width: 100%;
			height: 40upx;
			left: 0;
			right: 0;
			bottom: 0;
			z-index: 10;
			
			image{
				width: 100%;
				height: 100%;
			}
		}
		.income_content{
			position: absolute;
			left: 30upx;
			top: 0;
			z-index: 8;
			width: 690upx;
			height: 210upx;
			display: flex;
			justify-content: space-between;
			
			.income_list{
				width: 230upx;
				height: 100%;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				
				text{
					font-size:24upx;
					color: #FFD362;
				}
			}
			.income_user{
				
				image{
					width:70upx;
					height:70upx;
					border-radius:50%;
					box-sizing: border-box;
					border:2upx #FFD362 solid;
					margin-bottom: 14upx;
				}
			}
			.income_money{
				view{
					font-size:40upx;
					font-weight: bold;
					color:rgba(255,211,98,1);
				}
				text{
					margin-top: 40upx;
				}
			}
		}
	}

	// 系统公告
	.announcement{
		width: 690upx;
		height: 50upx;
		background: #FFD362;
		overflow: hidden;
		margin-top: 22upx;
		display: flex;
		justify-content: space-between;
		
		.xtgg_img{
			width: 185upx;
			height: 100%;
			
			image{
				width: 100%;
				height: 100%;
			}
		}
		.xtgg_text{
			width: 465upx;
			height: 50upx;
			line-height: 50upx;
			overflow: hidden;
			text-overflow:ellipsis;
			white-space: nowrap;
			font-size: 24upx;
			color: #000;
		}
	}
	
	// 广告宣传图
	.banner{
		width:690upx;
		height:332upx;
		margin-top: 28upx;
		overflow: hidden;
		
		.swiper{
			width: 100%;
			height: 300upx;
			border-radius:6upx;
			
			image{
				width: 100%;
				height: 100%;
			}
		}
		.pointing_point{
			width: 100%;
			height: 8upx;
			margin-top: 24upx;
			display: flex;
			justify-content: center;
			
			text{
				display: inline-block;
				width: 8upx;
				height: 8upx;
				// transition: all 0.1s;
				border-radius: 50%;
				background: rgba(0,0,0,0.4);
				margin: 0 10upx;
			}
			text.active{
				width: 55upx;
				border-radius: 4upx;
				background: rgba(0,0,0,1);
			}
		}
	}
	
	// 功能列表
	.features_list{
		width: 690upx;
		height: 140upx;
		margin-top: 50upx;
		overflow: hidden;
		display: flex;
		justify-content: space-between;
		
		view{
			flex: 1;
			height: 100%;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			align-items: center;
			
			image{
				width: 80upx;
				height: 80upx;
			}
			text{
				font-size:28upx;
				font-weight:bold;
				color:rgba(0,0,0,1);
			}
		}
	}
	
	
	// 脚本广告
	.footer_banner{
		width: 690upx;
		height: 200upx;
		overflow: hidden;
		margin-top: 50upx;
		
		image{
			width: 100%;
			height: 100%;
		}
	}
}
</style>
