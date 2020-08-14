// wxml
console.log('wxml')

const util = require('../../utils/util.js')
const phpstat_md5 = require('../../utils/phpstat_md5.js')

Page({
	data: {
		// time: (new Date()).toString()
		time: util.formatTime(new Date()),
		staffD: {
			firstName: 'lk',
			lastName: 'g'
		},
		arr: [{
				message: 'foo',
				id: 1
			},
			{
				message: 'bar',
				id: 2
			}
		]
	},
	onLoad() {
		console.log(phpstat_md5)
	}
})
