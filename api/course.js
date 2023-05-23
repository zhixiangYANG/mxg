import request from '@/common/js/request.js'

export default {
	// 查询指定位置的广告信息
	getAdvertList(position = 1) {
		return request({
			url: `/article/api/advert/show/${position}`
		})
	},

	// 查询分类与标签信息
	getCategoryList() {
		return request({
			url: '/article/api/category/label/list'
		})
	},

	// 条件分页查询课程列表,query条件对象，current当前页码，size每页显示多少条
	getList(query, current = 1, size = 10) {
		return request({
			url: '/course/api/course/search',
			method: 'POST',
			data: {
				...query,
				current,
				size
			}
		})
	}
}
