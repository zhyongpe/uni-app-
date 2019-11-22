import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

// 引入 state mutations actions
import state from "./state.js";
import mutations from "./mutations.js";
import actions from "./actions.js";

const store = new Vuex.Store({
	state,
	mutations,
	actions,
});

export default store;