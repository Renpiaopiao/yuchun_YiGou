// pages/index1/index1.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		swiperList:[],
		navilist:[],
		floorlist:[]
	},

	getswiperlist:function(){
		// 此处必须要用that,this是onload函数方法中的子节点
		var that = this;
		wx.request({
			url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata',
			success (res) {
				// console.log(res.data.message)
				that.setData({
					swiperList:res.data.message
				})
			}
		})
	},
	
	getnavibarlist:function(){
		// 此处必须要用that,this是onload函数方法中的子节点
		var that = this;
		wx.request({
			url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/catitems',
			success (res) {
				// console.log(res.data.message)
				that.setData({
					navilist:res.data.message
				})
			}
		})
	},

	getfloorlist:function(){
		// 此处必须要用that,this是onload函数方法中的子节点
		var that = this;
		wx.request({
			url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/floordata',
			success (res) {
				// console.log(res.data.message)
				that.setData({
					floorlist:res.data.message
				})
			}
		})
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		this.getswiperlist();
		this.getnavibarlist();
		this.getfloorlist();
	},

	/**
	 * 生命周期函数--监听页面初次渲染完成
	 */
	onReady: function () {

	},

	/**
	 * 生命周期函数--监听页面显示
	 */
	onShow: function () {

	},

	/**
	 * 生命周期函数--监听页面隐藏
	 */
	onHide: function () {

	},

	/**
	 * 生命周期函数--监听页面卸载
	 */
	onUnload: function () {

	},

	/**
	 * 页面相关事件处理函数--监听用户下拉动作
	 */
	onPullDownRefresh: function () {

	},

	/**
	 * 页面上拉触底事件的处理函数
	 */
	onReachBottom: function () {

	},

	/**
	 * 用户点击右上角分享
	 */
	onShareAppMessage: function () {

	}
})