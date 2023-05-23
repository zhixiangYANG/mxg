<template>
	<view class="course-item" :class="{column:isColum}">
		<view class="item-left">
			<image class="course-img" :src="item.mainImage" lazy-load></image>
			<view class="course-time">
				{{item.totalTime}}
			</view>
		</view>
		<view class="item-right">
			<view class="title">{{item.title}}</view>
			<view class="info">
				<view class="nickname iconfont icon-laoshi2">{{item.nickName}}</view>
				<view class="count">
					<view class="money" v-if="item.isFree">免费</view>
					<view class="money iconfont icon-moneybag" v-else>{{item.priceDiscount||item.priceOriginal}}</view>
					<view class="iconfont icon-video">{{item.studyTotal}} 人在学</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
			
		props:{
			isColum:{//是否纵向排列
				type:Boolean,
				default:false
			},
			item:{
				type:Object,
				default:()=>({
						id:1,
						mainImage:'/static/images/banner2.jpg',
						totalTime:'00:59:38',
						title:'uni-app梦学谷在线教育项目实战',
						nickName:'梦学谷',
						isFree:0,//是否收费，0免费，1收费
						priceOriginal:999,//原价
						priceDiscount:599,//优惠价
						studyTotal:399
				})
			}
		}
	}
</script>

<style lang="scss">
	.course-item {
		display: flex;
		//纵向排列
		width: 100%;
		padding: 20rpx 0rpx;
		border-bottom: 1rpx solid #f1f1f1;

		.item-left {
			width: 290rpx;
			height: 160rpx;
			margin-right: 20rpx;
			position: relative;

			.course-img {
				width: 100%;
				height: 100%;
				border-radius: 10rpx;
			}

			.course-time {
				position: absolute;
				bottom: 5rpx;
				right: 5rpx;
				font-size: 22rpx;
				color: #fff;
				background-color: rgba(51, 51, 51, .4);
				border-radius: 20rpx;
				padding: 0 8rpx;
			}
		}

		.item-right {
			justify-content: space-between;
			display: flex;
			flex-direction: column;

			.title {
				max-width: 290rpx;
				height: 70rpx;
				line-height: 35rpx;
				font-size: 28rpx;
				font-weight: bold;
				overflow: hidden;
				text-overflow: ellipsis;
				-webkit-line-clamp: 2;
				display: -webkit-box;
				-webkit-box-orient: vertical;
				white-space: normal;
			}

			.info {
				.nickname {
					font-size: 23rpx;
					color: #999;

				}

				.count {
					display: flex;
					align-items: center;

					.iconfont {
						font-size: 23rpx;
						color: #222;
					}

					.money {
						color: $mxg-color-orange;
						width: 130rpx;
						font-size: 28rpx;
						padding-right: 30rpx;
					}
				}
			}
		}
	}
</style>
