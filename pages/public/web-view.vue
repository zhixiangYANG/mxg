<template>
	<view>
		<web-view :src="url" v-if="isOpen(url)"></web-view>
		<view v-else class="tips column">
			<text>如需浏览，请长按网址复制后使用浏览器打开</text>
			<text selectable>{{url}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				url: null
			}
		},
		onLoad(option) {
			this.url = option.url
		},


		methods: {
			isOpen() {
				if (this.url) {
					return this.url.indexOf('mengxuegu.com') !== -1
				}
			}
		}
	}
</script>

<style lang="scss">
	.tips {
		position: relative;
		top: 200rpx;
		width: 500rpx;
		margin: 0 auto;
		word-wrap: break-word;
		font-size: 30rpx;
		text-align: center;

		text:first-child {
			font-size: 40rpx;
			font-weight: bold;
			margin-bottom: 30rpx;
		}
	}
</style>
