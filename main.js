import App from './App'

// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false

import mixin from './common/mixin/mixin.js'
Vue.mixin(mixin)

import MescrollBody from '@/components/mescroll-uni/components/mescroll-body/mescroll-body.vue'
Vue.component('mescroll-body', MescrollBody)

App.mpType = 'app'
const app = new Vue({
	...App
})
app.$mount()
// #endif

// #ifdef VUE3
import {
	createSSRApp
} from 'vue'
export function createApp() {
	const app = createSSRApp(App)
	return {
		app
	}
}
// #endif
