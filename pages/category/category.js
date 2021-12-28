// pages/category/category.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		lefttitle:[],
		rightcontent:[],
		currentindex:0,
		scrolltop:0
	},
	goodslist:[],

	getgoodslist:function(){
		var that = this;
		wx.request({
			url: 'https://api-hmugo-web.itheima.net/api/public/v1/categories',
			success (res) {
				that.goodslist = res.data.message;

				// 2、存入本地缓存
				wx.setStorageSync("goodslist",{time:Date.now(),data:that.goodslist})
						
				let lefttitle = that.goodslist.map(v => v.cat_name)
				let rightcontent = that.goodslist[0].children;

				that.setData({
					lefttitle:lefttitle,
					rightcontent:rightcontent
				})
			}
		})
	},
	changename:function(e){
		var index = e.currentTarget.dataset.index;
		let rightcontent = this.goodslist[index].children;

		this.setData({
			currentindex:index,
			rightcontent:rightcontent,
			scrolltop:0
		})
	},
	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		// 判断本地是否有数据缓存
		const goodslist = wx.getStorageSync("goodslist")
		if(!goodslist){
			this.getgoodslist();
		}else{
			// 缓存过期后重发请求
			if(Date.now() - goodslist.time > 1000*10){
				this.getgoodslist();
			}else{
				// 没过期设置本地数据
				this.goodslist = goodslist.data;
				let lefttitle = this.goodslist.map(v => v.cat_name)
				let rightcontent = this.goodslist[0].children;

				this.setData({
					lefttitle:lefttitle,
					rightcontent:rightcontent,
				})
			}
		}
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