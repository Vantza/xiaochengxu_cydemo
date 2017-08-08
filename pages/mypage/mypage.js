// pages/mypage/mypage.js
var imageArray = [{
  mode: 'scaleToFill',
  src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1502168332830&di=54eb0868f8b40826d91261de52d6bbb2&imgtype=0&src=http%3A%2F%2Fwww.goumin.com%2Fattachments%2Fphoto%2F0%2F0%2F66%2F17125%2F4384100o2.jpg'
}, {
  mode: 'aspectFit',
  src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1502168332830&di=ab116ec2ad012592e734fc43d5121b80&imgtype=0&src=http%3A%2F%2Fimg1.blog.eastmoney.com%2Fcr%2Fcrystalran%2F201405%2F20140509224746534.jpg'
}, {
  mode: 'top',
  src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1502168527477&di=ee771fed0eeaab1ab2ab4a132cff99f5&imgtype=jpg&src=http%3A%2F%2Fimg2.imgtn.bdimg.com%2Fit%2Fu%3D29373325%2C2147126213%26fm%3D214%26gp%3D0.jpg'
}, {
  mode: 'scaleToFill',
  src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1502168527477&di=ee771fed0eeaab1ab2ab4a132cff99f5&imgtype=jpg&src=http%3A%2F%2Fimg2.imgtn.bdimg.com%2Fit%2Fu%3D29373325%2C2147126213%26fm%3D214%26gp%3D0.jpg'
}];

var clickImageArray = [
  'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1502168332830&di=54eb0868f8b40826d91261de52d6bbb2&imgtype=0&src=http%3A%2F%2Fwww.goumin.com%2Fattachments%2Fphoto%2F0%2F0%2F66%2F17125%2F4384100o2.jpg',
  'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1502168332830&di=ab116ec2ad012592e734fc43d5121b80&imgtype=0&src=http%3A%2F%2Fimg1.blog.eastmoney.com%2Fcr%2Fcrystalran%2F201405%2F20140509224746534.jpg',
  'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1502168527477&di=ee771fed0eeaab1ab2ab4a132cff99f5&imgtype=jpg&src=http%3A%2F%2Fimg2.imgtn.bdimg.com%2Fit%2Fu%3D29373325%2C2147126213%26fm%3D214%26gp%3D0.jpg',
  'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1502168527477&di=ee771fed0eeaab1ab2ab4a132cff99f5&imgtype=jpg&src=http%3A%2F%2Fimg2.imgtn.bdimg.com%2Fit%2Fu%3D29373325%2C2147126213%26fm%3D214%26gp%3D0.jpg'
];


Page({

  /**
   * 页面的初始数据
   */
  data: { 
    locationText: '江苏省南通市濠北路华侨花苑10幢10号',
    businessHours: '09:00-17:00',
    phoneNumText: '18621924350,(0513)85197186',
    picText: '门店照片',
    imageArray: imageArray
  },

  makeCalling: function () {
    wx.makePhoneCall({
      phoneNumber: '12345678900', //此号码并非真实电话号码，仅用于测试
      success: function () {
        console.log("拨打电话成功！")
      },
      fail: function () {
        console.log("拨打电话失败！")
      }
    })
  },

  openLocation: function () {
    wx.openLocation({
      latitude: '32.03073',
      longitude: '120.864299',
      name: '三可体育用品商店 ',
      address: '江苏省南通市濠北路华侨花苑10幢10号',
      scale: 28,
      success: function () {
        console.log("打开地图成功！")
      },
      fail: function () {
        console.log("打开地图失败！")
      }
    })
  },

  previewlmg: function (event) {
    var imgIdx = event.currentTarget.dataset.imgIdx;
    wx.previewImage({
      current: clickImageArray[imgIdx],
      urls: clickImageArray,
      success: function () {
        console.log("打开图片成功！")
        console.log(imgIdx)
      },
      fail: function () {
        console.log("打开图片失败！")
      }
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
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  }
})