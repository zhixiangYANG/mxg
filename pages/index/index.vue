<template>
	<view class="index-box">
		<!-- #ifdef MP-WEIXIN-->
		<!-- 搜索框在小程序中显示 -->
		<search-input @click.native="navTo('/pages/search/search')"></search-input>
		<!-- #endif -->

		<!-- 轮播图 -->
		<mxg-banner :bannerList="bannerList"></mxg-banner>

		<mescroll-body ref="mescrollRef" @init="mescrollInit" @down="downCallback" @up="upCallback" :down="downOption" :up="upOption">
			<!-- @init="mescrollInit" @down="downCallback" @up="upCallback"为固定值,不可删改(与mescroll-mixins保持一致)
			 :down="downOption" :up="upOption" 绝大部分情况无需配置
			 
			:top="顶部偏移量" :bottom="底部偏移量" :topbar="状态栏" :safearea="安全区" (常用)
			字节跳动小程序 ref="mescrollRef" 必须配置
			此处支持写入原生组件 -->

			<!-- 分类区域 -->
			<category-box :categoryList="categoryList"></category-box>

			<view class="list-container">
				<!-- 热门推荐 -->
				<swiper-course name="热门推荐" word="HOT" :courseData='hotCourseList'></swiper-course>
				<scroll-course name="近期上新" word="NEW" :courseData='newCourseList'></scroll-course>
				<swiper-course name="免费精选" word="FREE" :courseData='freeCourseList'></swiper-course>
				<list-course name="付费精品" word="NICE" :courseData='payCourseList'></list-course>
			</view>

		</mescroll-body>
	</view>
</template>

<script>
	import searchInput from '@/components/common/search-input.vue';
	import mxgBanner from '@/components/common/mxg-banner.vue'

	import categoryBox from './components/category.vue'
	import swiperCourse from './components/swiper-course.vue'
	import scrollCourse from './components/scroll-course.vue'
	import listCourse from './components/list-course.vue'

	import api from '@/api/course.js'
	import MescrollMixin from "@/components/mescroll-uni/components/mescroll-uni/mescroll-mixins.js"

	export default {
		mixins: [MescrollMixin], // 使用mixin
		components: {
			searchInput,
			mxgBanner,
			categoryBox,
			swiperCourse,
			scrollCourse,
			listCourse
		},
		async onLoad() {
			// #ifdef APP-PLUS
			this.placeholderData()
			// #endif

			// // 查询数据
			// this.loadBannerData()
			// this.loadCateData()

			// // 查询列表数据
			// this.loadHotCourseData()
			// this.loadFreeCourseData()
			// this.loadNewCourseData()
			// this.loadPayCourseData()
		},

		data() {
			return {
				bannerList: [],
				categoryList: [],
				hotCourseList: [],
				freeCourseList: [],
				newCourseList: [],
				payCourseList: [],
				downOption: {
					offset: 50,
					textLoading: '亲亲，稍等加载中'
				},
				upOption: {
					textLoading: '亲亲，正在查询中',
					page: {
						num: 0,
						size: 10
					},
					textNoMore:'-- 我是有底线的 --'
				}
			}
		},

		//监听原生标题按钮点击事件，参数为object
		onNavigationBarButtonTap(e) {
			//点击第一个按钮
			if (e.index == 0) {
				//打开扫一扫功能
				uni.scanCode({
					success: (res) => { //如果要在方法中使用this,则使用箭头函数
						uni.navigateTo({
							url: `/pages/public/web-view?url=${res.result}`
						})
					},
					fail: () => {
						uni.showModal({
							title: '扫码失败'
						})
					}
				})

			}
		},
		
		// 监听搜索框点击事件
		onNavigationBarSearchInputClicked(){
			this.navTo('/pages/search/search')
		},

		// // 下拉刷新触发事件
		// onPullDownRefresh() {
		// 	// 查询数据
		// 	this.loadBannerData()
		// 	this.loadCateData()

		// 	// 查询列表数据
		// 	this.loadHotCourseData()
		// 	this.loadFreeCourseData()
		// 	this.loadNewCourseData()
		// 	this.loadPayCourseData()

		// 	setTimeout(() => {
		// 		uni.stopPullDownRefresh()
		// 	}, 2000)
		// },

		methods: {
			placeholderData() {
				//获取当前页面实例
				const WebView = this.$scope.$getAppWebview();
				//搜索框提示内容定时获取
				let arr = ['APP • 微信小程序', 'Java • SpringBoot', 'SpringCloud • SpringSecrity', 'Vue • React']
				//一加载页面就调用第一次
				let i = 0
				WebView.setStyle({
					"titleNView": {
						"searchInput": {
							"placeholder": arr[i]
						}
					}
				})
				const len = arr.length - 1
				setInterval(() => {
					//第二次就是下标1，每次+1,如果到达最后一个元素，则重新从0开始
					i = i < len ? ++i : 0
					WebView.setStyle({
						"titleNView": {
							"searchInput": {
								"placeholder": arr[i]
							}
						}
					})
				}, 3000)
			},

			// 查询轮播图数据
			async loadBannerData() {
				const {
					data
				} = await api.getAdvertList(1)
				this.bannerList = data
			},

			// 查询分类数据
			async loadCateData() {
				const {
					data
				} = await api.getCategoryList()
				this.categoryList = data
			},

			// 查询热门推荐数据
			async loadHotCourseData() {
				const {
					data
				} = await api.getList({
					sort: 'hot'
				}, 1, 8)
				this.hotCourseList = data.records
			},

			// 免费列表
			async loadFreeCourseData() {
				// isFree = 0收费，1免费
				const {
					data
				} = await api.getList({
					isFree: 1
				}, 1, 8)
				this.freeCourseList = data.records
			},

			// 近期上新
			async loadNewCourseData() {
				const {
					data
				} = await api.getList({
					sort: 'new'
				})
				this.newCourseList = data.records
			},

			// 付费列表
			async loadPayCourseData() {
				// isFree = 0收费，1免费
				const {
					data
				} = await api.getList({
					isFree: 0,
				}, page.num, page.size)
				const curList = data.records
				// 判断是否为第一页，是则将原付费数据清空
				if (page.num === 1) this.payCourseList = []
				this.payCourseList = this.payCourseList.concat(curList)

				// 请求成功，隐藏加载效果
				this.mescroll.endBySize(curList.length, data.total)
			},

			// 下拉刷新的回调
			// downCallback() {
			// 	console.log('下拉刷新')
			// },

			// 上拉加载的回调
			async upCallback(page) {
				// console.log('上拉刷新')
				let pageNum = page.num; // 页码, 默认从1开始
				let pageSize = page.size; // 页长, 默认每页10条
				// 如果是第1页，则是下拉刷新
				if (page.num === 1) {
					// 查询数据
					this.loadBannerData()
					this.loadCateData()

					// 查询列表数据
					this.loadHotCourseData()
					this.loadFreeCourseData()
					this.loadNewCourseData()
				}

				// this.loadPayCourseData()
				// 分页查询
				// isFree = 0收费，1免费
				const {
					data
				} = await api.getList({
					isFree: 0,
				}, page.num, page.size)
				const curList = data.records
				// 判断是否为第一页，是则将原付费数据清空
				if (page.num === 1) this.payCourseList = []
				this.payCourseList = this.payCourseList.concat(curList)

				// 请求成功，隐藏加载效果
				this.mescroll.endBySize(curList.length, data.total)
			}
		}
	}
</script>

<style lang="scss">
	.list-container {
		padding: 0 30rpx;
	}
</style>