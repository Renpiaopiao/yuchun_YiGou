// pages/cart/cart.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {

	},

	handleGetAddress:function(){
		console.log('dian ji le');
		// wx.chooseAddress({
		//   success: (result) => {
		// 	  console.log(result);
		//   },
		// })

		wx.getSetting({
		  withSubscriptions: true,
		  success: (result) => {
			  console.log(result);
			  const scopeAddress = result.authSetting['scope.address'];
			  if(scopeAddress === true || scopeAddress === undefined){
				  wx.chooseAddress({
					success: (result1) => {
						console.log('result1-------------',result1);
					},
				  })
			  }else{  //用户之前拒绝了授权
				  wx.openSetting({
					  success:(result) => {
						wx.chooseAddress({
							success: (result2) => {
								console.log('result2-------------',result1);
							},
						  })
					  }
				  })				
			  }
		  },
		  fail: (res) => {},
		  complete: (res) => {},
		})
	},


	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {

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