<template>
	<view class="list-box">
		<view class="title space-between center">
			<view class="center">
				<text class="name">{{name}}</text>
				<text class="word" v-if="word">{{word}}</text>
			</view>
			<view class="all">
				<text>全部</text>
				<text class="iconfont icon-right"></text>
			</view>
		</view>

		<!-- 插槽 -->
		<slot></slot>
	</view>
</template>

<script>

	import courseData from '@/mock/courseData.js'
	export default {
		props: {
			name: {
				type: String,
				default: '热门推荐'
			},
			word: {
				type: String,
				default: null
			}
		}
	}
</script>

<style lang="scss">
	.list-box {
		margin-top: 60rpx;

		.name {
			font-size: 38rpx;
			font-weight: 500;
			color: #303133;
			margin-right: 10rpx;
		}

		.word {
			font-size: 20rpx;
			color: #fff;
			background-image: linear-gradient(to right, $mxg-color-orange, $mxg-text-color-red);
			padding: 0 10rpx;
			border-radius: 30rpx 30rpx 30rpx 0rpx;
		}

		.all {
			font-size: 28rpx;
			font-weight: normal;
			color: $mxg-text-color-grey;

			.iconfont {
				font-size: 25rpx;
			}
		}

		
	}
</style>
