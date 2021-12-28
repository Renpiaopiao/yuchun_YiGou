// pages/goods_detail/goods_detail.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		goods_obj:{}
	},
	goodsinfo:{},

	getlist:function(param){
		var that = this;
		wx.showLoading({
			title: '加载中',
		  })
		setTimeout(function () {
			wx.hideLoading()
		  }, 1000)

		wx.request({
		  url: 'https://api-hmugo-web.itheima.net/api/public/v1/goods/detail',
		  data:{
			goods_id:param
		  },
		  success(res){
			console.log(res);
			that.goodsinfo = res.data.message;
			// 存入页面
			that.setData({
				goods_obj:{
					goods_name:res.data.message.goods_name,
					goods_price:res.data.message.goods_price,
					goods_introduce:res.data.message.goods_introduce,
					pics:res.data.message.pics
				}
			})
			// 关闭等待的效果
			wx.stopPullDownRefresh()
		  }
		})
	},

	// 轮播图放大预览
	handleimg:function(e){
		const urls = this.goodsinfo.pics.map(v=>v.pics_mid);
		// 目前的方法
		// console.log(e.currentTarget.dataset.url);
		const current = e.currentTarget.dataset.url;
		wx.previewImage({
			current:current,
		    urls: urls,
		})
	},
 
	//添加购物车
	cartAdd:function(){
		// 1、从缓存获取购物车  转换成[]格式
		var cart = wx.getStorageSync('cart')||[];
		// 2、判断商品对象是否存在于购物车数组中
		var index = cart.findIndex(v=>v.goods_id === this.goodsinfo.goods_id);
		if(index === -1){
			// 3、第一次添加
			this.goodsinfo.num = 1;
			cart.push(this.goodsinfo);
		}else{
			// 4、已经在购物车
			cart[index].num++;
		}
		// 5、购物车重新加入缓存中
		wx.setStorageSync("cart",cart);
		// 6、弹出窗口
		wx.showToast({
		  title: '加入成功',
		  icon:'success',
		  mask:true
		})
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		var a = options.goods_id;
		this.getlist(a);
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