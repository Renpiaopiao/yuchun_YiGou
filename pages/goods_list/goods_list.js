// pages/goods_list/goods_list.js

/*
	1、用户上滑，滚动条触底事件
	2、判断还有没
*/
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		tabs:[
			{
				id:0,
				name:"综合",
				isActive:true
			},
			{
				id:1,
				name:"销量",
				isActive:false
			},
			{
				id:2,
				name:"价格",
				isActive:false
			}
		],
		goodslist:[]
	},
	pagesize:10,
	totalpages:1,
	pagenum:1,
	cid:5,
	
	changeactive:function(e){
		var index = e.detail;
		var tabs = this.data.tabs;
		tabs.forEach(item => item.id===index?item.isActive=true:item.isActive=false)
		this.setData({
			tabs:tabs
		})
	},

	getgoodslist:function(){
		var that = this;
		wx.showLoading({
			title: '加载中',
		  })
		  setTimeout(function () {
			wx.hideLoading()
		  }, 1000)
		wx.request({
		  url: 'https://api-hmugo-web.itheima.net/api/public/v1/goods/search',
		  data: {
			query:'',
			cid:that.cid,
			pagenum:that.pagenum,
			pagesize:that.pagesize
		  },
		  success(res){
			// 获取总条数
			const total = res.data.message.total;
			// 计算总页数
			that.totalpages = Math.ceil(total/that.pagesize);
			console.log("total_pages",that.totalpages)

			// 新数组不能直接赋值，不然要覆盖掉原来的list，所以需要先拼接，再赋值
			var newlist = that.data.goodslist.concat(res.data.message.goods)

			console.log(newlist);

			that.setData({	
				goodslist:newlist
			})

			// 关闭等待的效果
			wx.stopPullDownRefresh()
		  }
		})
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		console.log('options',options.cid)
		this.getgoodslist()
	},

	/**
	 * 页面上拉触底事件的处理函数
	 */
	onReachBottom: function () {
		// console.log('dsas')
		console.log('this.pagenum',this.pagenum)
		if(this.pagenum >= this.totalpages){
			// wx.showModal({
			// 	title:'提示',
			// 	showCancel: false,
			// 	content:'没有下一页了'
			// })
			
			// 不带点击确定的提示
			wx.showToast({
			  title: '没有下一页了',
			  duration:2000

			})
		}else{
			this.pagenum++;
			this.getgoodslist();
		}
	},
	
	/**
	 * 页面相关事件处理函数--监听用户下拉动作
	 */
	onPullDownRefresh: function () {
		this.setData({
			goodslist: []
		})
		// 重置页码
		this.pagenum = 1;
		this.getgoodslist();
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
	 * 用户点击右上角分享
	 */
	onShareAppMessage: function () {

	}
})