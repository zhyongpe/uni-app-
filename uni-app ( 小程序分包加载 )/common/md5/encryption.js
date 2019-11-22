import md5 from './md5.js';

var signUtils = {
	secret: 'wZPb~yxvA!ir38&ZFOX-FLY.',
	getKeyArr: function(obj) {
		var arr = []
		for (var o in obj) {
			arr.push(o)
		}
		return arr
	},
	keySort: function(arr) {
		return arr.sort();
	},
	getSignData: function(obj) {

		var keyArr = this.keySort(this.getKeyArr(obj))
		// 拼接签名参数值
		var sign = this.secret
		for (var i in keyArr) {
			sign += obj[keyArr[i]]
		}
		return sign;
	}
}

export default (obj) => {
	obj.sign = md5(signUtils.getSignData(obj));
	return obj;
}
