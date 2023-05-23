<template>
	<view class="category">
		<scroll-view scroll-y class="left noScorll">
			<view class="title">
				<view class="active">前端开发</view>
				<view>移动开发</view>
				<view>云计算</view>
				<view>人工智能</view>
				<view>python</view>
				<view>设计</view>
				<view>数据库</view>
				<view>游戏</view>
				<view>运维/测试</view>
			</view>
		</scroll-view>
		<scroll-view scroll-y class="right">
			<view class="tag">
				<view>HTML/CSS</view>
				<view>Sass/Less</view>
				<view>TypeScript</view>
				<view>JavaScript</view>
				<view>Vue.js</view>
				<view>Jquery</view>
				<view>uniapp</view>
				<view>React.js</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import api from '@/api/course.js'
	export default {
		data() {
			return {
				categoryList: [], //左侧分类标签
				labelList: [], // 右侧分类标签
				activeIndex: 0 // 当前选中的下标
			}
		},

		mounted() {
			this.getList()
		},

		methods: {
			async getList() {
				const {
					data
				} = await api.getCategoryList()
				this.categoryList = data
			}
		}
	}
</script>

<style lang="scss">
	page {
		height: 100%;
	}

	.category {
		display: flex;
		height: 100%;

		.left {
			background-color: #F8F9FB;
			width: 260rpx;
			border-radius: 0 20rpx 25rpx 0;

			.title {
				view {
					color: #000;
					text-align: center;
					font-size: 30rpx;
					color: #888;
					width: 100%;
					padding: 55rpx 30rpx;
					position: relative;

					&:before {
						position: absolute;
						content: '';
						width: 0rpx;
						height: 0rpx;
						border-right: 6rpx solid $mxg-color-primary;
						border-radius: 30rpx;
						left: 0;
						top: 50%;
						transform: translateY(-50%);
						transition: .3s;
					}
				}

				.active {
					color: $mxg-color-primary;
					font-size: 33rpx;
					font-weight: bold;

					&:before {
						height: 50rpx;
					}
				}
			}
		}

		.right {
			background-color: #fff;
			padding-left: 15rpx;
			margin: 0; // 铺满

			.tag {
				display: flex;
				flex-wrap: wrap;
				padding-top: 35rpx;
				padding-left: 10rpx;

				view {
					font-size: 25rpx;
					line-height: 60rpx;
					border: 1rpx solid #999;
					border-radius: 30rpx;
					min-width: 160rpx;
					text-align: center;
					padding: 0 5rpx;
					margin: 15rpx 5rpx;
				}
			}
		}
	}
</style>