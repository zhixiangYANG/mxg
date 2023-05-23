<template>
	<list-box :name="name" :word="word">
		<scroll-view class="list-scroll noScorll" scroll-x="">
			<view class="list-scroll-view" v-for="(item,index) in courseData" :key='index'>
				<course-item class="list-scroll-item" :isColum="true" :item="item"></course-item>
			</view>
		</scroll-view>
	</list-box>
</template>

<script>
	import listBox from './list-box.vue'
	import courseItem from '@/components/common/course-item.vue'
	import courseData from '@/mock/courseData.js'
	export default {
		components: {
			listBox,
			courseItem
		},
		props: {
			name: {
				type: String,
				default: '近期上新'
			},
			word: {
				type: String,
				default: null
			},
			courseData: {
				type: Array,
				default: () => courseData
			}
		}
	}
</script>

<style lang="scss">
	.list-scroll {
		white-space: nowrap;
		height: 380rpx;

		.list-scroll-view {
			display: inline-block;
			width: 310rpx;
			padding: 0 10rpx;
			margin-right: 20rpx;
			box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
			border-radius: 20rpx;
			background-color: #fff;
		}
	}
</style>
