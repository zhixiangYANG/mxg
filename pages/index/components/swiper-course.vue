<template>
	<list-box :name="name" :word="word">
		<swiper class="list-swiper" next-margin="30rpx" :style="{height:`${200*rows}rpx`}">
			<swiper-item class="swiper-item" v-for="(n,index) in column" :key="index">
				<course-item v-for="(item,i) in courseData.slice(index*rows,(index+1)*rows)" :key='i' :item="item">
				</course-item>
			</swiper-item>
		</swiper>
	</list-box>
</template>

<script>
	import courseItem from '@/components/common/course-item.vue'
	import courseData from '@/mock/courseData.js'
	import listBox from './list-box.vue'
	export default {
		components: {
			courseItem,
			listBox
		},
		props: {
			name: {
				type: String,
				default: '热门推荐'
			},
			word: {
				type: String,
				default: null
			},
			column: {
				type: Number,
				default: 2
			},
			rows: {
				type: Number,
				default: 5
			},
			courseData: {
				type: Array,
				default: () => courseData
			}
		}
	}
</script>

<style lang="scss">
		
</style>
