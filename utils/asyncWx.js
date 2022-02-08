// getsetting
export const getSetting = ()=> {
	return new Promise((resolve,reject) => {
		wx.getSetting({
		  withSubscriptions: true,
		  success:(result) => {
			  resolve(result)	
		  },
		  fail:(result) => {
			reject(result)	
		},
		})
	})
}

// chooseAddress
export const chooseAddress = ()=> {
	return new Promise((resolve,reject) => {
		wx.chooseAddress({
		  withSubscriptions: true,
		  success:(result) => {
			  resolve(result)	
		  },
		  fail:(result) => {
			reject(result)	
		},
		})
	})
}

// openSetting
export const openSetting = ()=> {
	return new Promise((resolve,reject) => {
		wx.openSetting({
		  withSubscriptions: true,
		  success:(result) => {
			  resolve(result)	
		  },
		  fail:(result) => {
			reject(result)	
		},
		})
	})
}

