<template>
	<view>
		<view class="search-box">
			<input class="search-input" @click="add" type="text" placeholder="搜索你想要的内容" disabled />
		</view>
	</view>
</template>

<script>
	export default {
		methods: {
			add() {
				this.$emit('click')
			}
		}
	}
</script>

<style lang="scss">
	.search-box {
		position: absolute;
		left: 0;
		top: 30rpx;
		z-index: 9999;
		width: 100%;

		.search-input {
			background-color: #f8f8f8;
			height: 70rpx;
			line-height: 40rpx;
			text-align: center;
			border-radius: 30rpx;
			margin: 0 20rpx;
		}
	}
</style>