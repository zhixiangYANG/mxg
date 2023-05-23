<template>
	<view class="category-box">
		<view v-for="(item,index) in categoryList.slice(0,7)" :key="index">{{item.name}}</view> 
		<view>全部分类</view>
	</view>
</template>

<script>
	export default {
		props: {
			categoryList: {
				type: Array,
				default: () => [{
					id: 1,
					name: "Java"
				}, {
					id: 2,
					name: "PHP"
				}, {
					id: 3,
					name: "前端"
				}, {
					id: 4,
					name: "大数据"
				}, {
					id: 5,
					name: "运维"
				}, {
					id: 6,
					name: "UI设计"
				}, {
					id: 7,
					name: "Python"
				}],
			}
		}
	}
</script>

<style lang="scss">
	.category-box {
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
		padding: 20rpx 30rpx 0 30rpx;

		>view {
			width: 160rpx;
			height: 70rpx;
			background-color: $mxg-color-grey;
			text-align: center;
			line-height: 70rpx;
			font-size: 26rpx;
			border-radius: 20rpx;
			overflow: hidden;
			margin-top: 15rpx;

		}
	}
</style>
