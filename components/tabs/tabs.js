// components/tabs/tabs.js
Component({
	/**
	 * 组件的属性列表
	 */
	properties: {
		Tabs:{
			type:Array,
			value:[]
		}
	},

	/**
	 * 组件的初始数据
	 */
	data: {

	},

	/**
	 * 组件的方法列表
	 */
	methods: {
		clickbox:function(e){
			var index = e.currentTarget.dataset.wx_index;
			this.triggerEvent("handleclick",index);
		}
	}
})
