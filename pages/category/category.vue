<template>
	<view class="category">
		<scroll-view scroll-y class="left noScorll">
			<view class="title">
				<view :class="{active:index===activeIndex}" v-for="(item,index) in categoryList" :key="index" @click.stop="getLabel(index,item)">{{item.name}}</view>
			</view>
		</scroll-view>
		<scroll-view scroll-y class="right">
			<view class="tag">
				<view v-for="(item,index) in labelList" :key="index" @click.stop="clickLabel(item)">{{item.name}}</view>
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

		// 监听原生标题栏按钮点击事件，参数为object

		onNavigationBarButtonTap(e) {
			if (e.index === 0) {
				this.navTo('pages/search/search')
			}
		},

		methods: {
			async getList() {
				const {
					data
				} = await api.getCategoryList()
				this.categoryList = data
				this.getLabel(this.activeIndex)
			},

			// 获取标签列表(分类下标，分类信息)
			getLabel(index, item) {
				this.activeIndex = index
				const activeCategory = this.categoryList[index]
				this.labelList = activeCategory.labelList
			},

			clickLabel(item) {
				// 注意：labelId一定要放到第1个位置，后面解析的时候需要使用，顺序一定不要乱
				const params = {
					labelId: item.id,
					name: item.name,
					activeIndex: this.activeIndex
				}
				this.navTo(`/pages/search/search?params=${JSON.stringify(params)}`)
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