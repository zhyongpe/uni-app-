import Vue from 'vue'
import App from './App'


// 引入公用方法
import store from "./store/index.js"; // store
import md5 from "./common/md5/encryption.js"; // 签名
import publicMethod from "./common/common.js"; // 常用公共方法
Vue.prototype.$serverName = "/";//域名


// Vue 原型上 ->	方法
Vue.prototype.$store = store;
Vue.prototype.$md5 = md5;
Vue.prototype.$publicMethod = publicMethod;


// 引入全局组件


// 全局注册组件


Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
    ...App,
	store
})
app.$mount()
