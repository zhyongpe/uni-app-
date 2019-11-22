import md5 from "./md5/encryption.js"; // 签名

// 获取/增加/删除 Storage
const setStorage = (key, data) => {
	uni.setStorageSync(key, data);
}
const getStorage = (key) => {
	return uni.getStorageSync(key);
}
const removeStorage = (key) => {
	uni.removeStorageSync(key);
}


// 判断图片是否能加载出来
const validateImage = (pathImg) => {
	let ImgObj = new Image();
	ImgObj.src = pathImg;
	if (ImgObj.fileSize > 0 || (ImgObj.width > 0 && ImgObj.height > 0)) {
		return true;
	} else {
		return false;
	}
};


// 转换时间戳封装
const $addZero = (v, size) => {
	for (var i = 0, len = size - (v + "").length; i < len; i++) {
		v = "0" + v;
	};
	return v + "";
}
const formatDate = (date, formatStr) => {
	var arrWeek = ['日', '一', '二', '三', '四', '五', '六'],
		str = formatStr.replace(/yyyy|YYYY/, date.getFullYear()).replace(/yy|YY/, $addZero(date.getFullYear() % 100,
			2)).replace(/mm|MM/, $addZero(date.getMonth() + 1, 2)).replace(/m|M/g, date.getMonth() + 1).replace(/dd|DD/,
			$addZero(date.getDate(), 2)).replace(/d|D/g, date.getDate()).replace(/hh|HH/, $addZero(date.getHours(), 2)).replace(
			/h|H/g, date.getHours()).replace(/ii|II/, $addZero(date.getMinutes(), 2)).replace(/i|I/g, date.getMinutes())
		.replace(/ss|SS/, $addZero(date.getSeconds(), 2)).replace(/s|S/g, date.getSeconds()).replace(/w/g, date.getDay())
		.replace(/W/g, arrWeek[date.getDay()]);
	return str;
};


// 请求封装
const Post = (url, params, callBack) => {
	let data = md5(params)
	data = JSON.stringify(data);

	return uni.request({
		url: url,
		data: {
			data: data
		},
		method: 'POST',
		success: res => {
			if (res.statusCode == 200) {
				if (res.data.code == 1) {
					callBack(res.data);
				} else if (res.data.code == 2) {
					// #ifdef APP-PLUS
					uni.showModal({
						content: res.data.msg,
						showCancel: false,
						success: result => {
							if (result.confirm) {
								uni.navigateTo({
									url:'/pages/log_in_register/login'
								})
								uni.clearStorage();
							}
						}
					})
					// #endif
					
					// #ifdef MP-WEIXIN
					uni.showModal({
						content: res.data.msg,
						showCancel: false,
						success: result => {
							if (result.confirm) {
								switchTab('/pages/tabbar/index/index');
								uni.clearStorage();
							}
						}
					})
					// #endif
				} else{
					uni.showToast({
						title: res.data.msg,
						icon: "none"
					})
				}
			} else {
				uni.showToast({
					title: "请稍后重试...",
					icon: "none"
				})
			}
		},
		fail: (err) => {
			uni.showModal({
				content: '网络异常,请稍后重试...',
				showCancel: false
			})
		}
	})
}


// 弹出层
const showToast = (title, icon, success_callBack) => {
	if (success_callBack) {
		uni.showToast({
			title,
			icon,
			success() {
				setTimeout(() => {
					success_callBack()
				}, 1500)
			}
		})
	} else {
		uni.showToast({
			title,
			icon,
		})
	}

}
const showLoading = (title, mask) => {
	uni.showLoading({
		title,
		mask
	})
}
const showModal = (content, success_callBack) => {
	uni.showModal({
		content,
		success: res => {
			if (res.confirm) {
				success_callBack();
			}
		}
	})
}


// 路由跳转
const navigateTo = (Path, result) => {
	if (Path != "") {
		if (result) {
			uni.navigateTo({
				url: Path,
				success(res) {
					result(res)
				}
			})
		} else {
			uni.navigateTo({
				url: Path
			})
		}
	}
	// 	let token = getStorage("token");
	// 	if (token) {
	// 		if (Path != "") {
	// 			if (result) {
	// 				uni.navigateTo({
	// 					url: Path,
	// 					success(res) {
	// 						result(res)
	// 					}
	// 				})
	// 			} else {
	// 				uni.navigateTo({
	// 					url: Path
	// 				})
	// 			}
	// 
	// 		}
	// 	} else {
	// 		showModal("亲，请先登录", () => {
	// 			uni.navigateTo({
	// 				url: '/pages/registerLogin/Login'
	// 			})
	// 		})
	// 	}
}
const redirectTo = (Path, result) => {
	let token = getStorage("token");
	if (token) {
		if (Path != "") {
			if (result) {
				uni.redirectTo({
					url: Path,
					success(res) {
						result(res)
					}
				})
			} else {
				uni.redirectTo({
					url: Path
				})
			}
		}
	} else {
		showModal("亲，请先登录", () => {
			uni.navigateTo({
				url: '/pages/registerLogin/Login'
			})
		})
	}
}
const reLaunch = (Path, result) => {
	let token = getStorage("token");
	if (token) {
		if (Path != "") {
			if (result) {
				uni.reLaunch({
					url: Path,
					success(res) {
						result(res)
					}
				})
			} else {
				uni.reLaunch({
					url: Path
				})
			}
		}
	} else {
		showModal("亲，请先登录", () => {
			uni.navigateTo({
				url: '/pages/registerLogin/Login'
			})
		})
	}
}
const switchTab = (Path, result) => {
	if (Path != "") {
		if (result) {
			uni.switchTab({
				url: Path,
				success:res=> {
					result()
				}
			})
		} else {
			uni.switchTab({
				url: Path
			})
		}
	}
}
const navigateBack = () => {
	uni.navigateBack();
}


// 设置导航条
const setNavigationBarTitle = (title) => {
	uni.setNavigationBarTitle({
		title
	});
}


// 预览图片
const previewImage = (img,callBack)=>{
	let urls = [img];
	uni.previewImage({
		urls,
		success:res=>{
			if(callBack){
				callBack();
			}
		}
	})
}

// 导出数据
export default {
	setStorage,
	getStorage,
	removeStorage,
	validateImage,
	formatDate,
	Post,
	navigateTo,
	redirectTo,
	reLaunch,
	switchTab,
	navigateBack,
	showToast,
	showLoading,
	showModal,
	setNavigationBarTitle,
	previewImage
}
