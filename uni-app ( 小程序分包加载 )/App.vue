<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	view,text{
		line-height: 1;
	}
	.auto{
		margin: 0 auto;
	}
	.common_btn{
		width:600upx;
		height:80upx;
		background:linear-gradient(90deg,rgba(31,36,45,1) 0%,rgba(81,84,86,1) 100%);
		border-radius:40upx;
		text-align: center;
		line-height: 80upx;
		font-size:30upx;
		color:rgba(255,184,0,1);
	}
</style>
