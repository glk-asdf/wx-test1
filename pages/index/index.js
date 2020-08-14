//index.js
console.log('index')
//获取应用实例
const app = getApp()

Page({
	data: {
		motto: 'Hello World 1.0.0',
		userInfo: {},
		hasUserInfo: false,
		canIUse: wx.canIUse('button.open-type.getUserInfo'),
		latitude: 0,
		longitude: 0,
		staffA: {
			firstName: 'Hulk',
			lastName: 'Hu'
		},
		staffB: {
			firstName: 'Shang',
			lastName: 'You'
		},
		staffC: {
			firstName: 'Gideon',
			lastName: 'Lin'
		},
		codeInf: '', // 二维码信息
	},
	//事件处理函数 点击头像跳转至日志
	bindViewTap: function() {
		wx.navigateTo({
			url: '../logs/logs'
			// url: '../wxml/index'
		})
	},
	// 跳转至 wxui测试
	goToWxui: function() {
		wx.navigateTo({
			url: '../wxui/wxui'
			// url: '../wxml/index'
		})
	},
	scanCode: function() {
		wx.scanCode({
			success: (res) => {
				console.log(res)
				this.setData({
					codeInf: res
				})
			}
		})
	},
	previewImage: function() {
		wx.previewImage({
			current: 'https://img1.gtimg.com/10/1048/104857/10485726_980x1200_0.jpg',
			urls: [ // 所有图片的URL列表，数组格式
				'https://img1.gtimg.com/10/1048/104857/10485731_980x1200_0.jpg',
				'https://img1.gtimg.com/10/1048/104857/10485726_980x1200_0.jpg',
				'https://img1.gtimg.com/10/1048/104857/10485729_980x1200_0.jpg'
			],
			success: function(res) {
				console.log(res)
			}
		})
	},
	onLoad: function() {
		// 获取用户信息
		if (app.globalData.userInfo) {
			this.setData({
				userInfo: app.globalData.userInfo,
				hasUserInfo: true
			})
		} else if (this.data.canIUse) {
			// 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
			// 所以此处加入 callback 以防止这种情况
			app.userInfoReadyCallback = res => {
				this.setData({
					userInfo: res.userInfo,
					hasUserInfo: true
				})
			}
		} else {
			// 在没有 open-type=getUserInfo 版本的兼容处理
			wx.getUserInfo({
				success: res => {
					app.globalData.userInfo = res.userInfo
					this.setData({
						userInfo: res.userInfo,
						hasUserInfo: true
					})
				}
			})
		}
		// 获取当前经纬度
		wx.getLocation({
			// type: 'wgs84',
			type: 'gcj02',
			success: (res) => {
				var latitude = res.latitude // 纬度
				var longitude = res.longitude // 经度
				this.setData({
					latitude: res.latitude,
					longitude: res.longitude
				})
			}
		})
	},
	getUserInfo: function(e) {
		console.log(e)
		app.globalData.userInfo = e.detail.userInfo
		this.setData({
			userInfo: e.detail.userInfo,
			hasUserInfo: true
		})
	}
})
