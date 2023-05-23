<template>
	<view class="banner-box">
		<view class="banner-bg" :style="{'background-image':`linear-gradient(${bannerBackground||'#345Dc2'} 50%, #fff)`}">
		</view>
		<swiper class="banner-swiper" indicator-dots indicator-color="rgba(255,255,255,0.5)"
			indicator-active-color="#ffffff" :current="current" autoplay :interval="4000" @change="swiperChange">
			<swiper-item class="swiper-item" v-for="(item,index) in bannerList" :key="index">
				<image :src="item.imageUrl" mode=""></image>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
		props: {
			bannerList: { //轮播图数组
				type: Array,
				default: () => [{
					id: 1,
					imageUrl: '/static/images/banner1.jpg',
					background: '#45328c',
					advertUrl: '/pages/course/course-details'
				}, {
					id: 2,
					imageUrl: '/static/images/banner2.jpg',
					background: '#006c00',
					advertUrl: '/pages/course/course-details'
				}, {
					id: 3,
					imageUrl: '/static/images/banner3.jpg',
					background: '#0072B7',
					advertUrl: '/pages/course/course-details'
				}]

			}
		},
		data() {
			return {
				current: 0, //当前所在滑块的index
				bannerBackground: "", //背景色
			}
		},
		methods: {
			swiperChange(e) {
				this.current = e.detail.current
				this.bannerBackground = this.bannerList[this.current].background

			}
		},

		watch: {
			bannerList: {
				handler(newVal) {
					if (newVal && newVal.length > 0) {
						//获取第一个元素中的背景色，然后设置
						this.cuurent = 0
						//设置第一张图背景色
						this.bannerBackground = this.bannerList[0] && this.bannerList[0].background
					}
				},
				immediate: true //第一次加载就执行此监听器
			}
		}
	}
</script>

<style lang="scss">
	.banner-box {
		padding-top: 120rpx;
		/* #ifdef APP-PLUS */
		padding-top: calc(var(--status-bar-height) + 120rpx);

		/* #endif*/
		.banner-bg {
			position: absolute;
			top: 0;
			width: 100%;
			height: 470rpx;
			/* #ifdef APP-PLUS */
			height: calc(var(--status-bar-height) + 470rpx);
			/* #endif*/
			// background-image: linear-gradient(red 50%, #fff);
			transform: .5s;
		}

		.banner-swiper {
			width: 100%;
			height: 350rpx;

			.swiper-item {
				width: 100%;
				height: 100%;
				padding: 0 30rpx;

				image {
					width: 100%;
					height: 100%;
					border-radius: 15rpx;
				}
			}
		}
	}
</style>
