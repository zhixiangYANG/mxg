<template>
	<view>
		<uni-search-bar radius="100" placeholder="搜索你想要的内容" clearButton="auto" cancelButton="always" @cancel="navBack(1)" @confirm="doSearch"></uni-search-bar>
	</view>
</template>

<script>
	let currentWebview = null
	export default {
		data() {
			return {
				params: null, // 其他页面带的参数
				content: '', // 搜索内容
			}
		},
		onLoad(option) {
			// #ifdef APP-PLUS
			currentWebview = this.$scope.$getAppWebview();
			//此对象相当于html5plus里的plus.webview.currentWebview()。在uni-app里vue页面直接使用plus.webview.currentWebview()无效
			// #endif
			// 如果有参数，不自动获取焦点，没有参数，自动获取焦点
			if (option.params) {
				this.params = JSON.parse(option.params)
				this.doSearch()
			} else {
				// 获取焦点
				// #ifdef APP-PLUS
				currentWebview.setTitleNViewSearchInputFocus(true)
				// #endif
			}
		},

		// 取消按钮，点击事件
		onNavigationBarButtonTap(e) {
			this.navBack()
		},

		// 监听原生标题栏搜索输入框输入内容变化事件
		onNavigationBarSearchInputChanged(e) {
			thisc.content = e.text
		},

		// 用户点击软键盘上的搜索按钮时触发
		onNavigationBarSearchInputConfirmed(e) {
			// #ifdef APP-PLUS
			currentWebview.setTitleNViewSearchInputFocus(false)
			// #endif
			this.doSearch()
		},

		methods: {
			doSearch(obj) {
				console.log(obj)
				// uni.showLoading()
			}
		}
	}
</script>

<style>

</style>