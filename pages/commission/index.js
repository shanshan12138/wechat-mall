// pages/commission/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    authModalShow: false
  },
  // tapHandle() {
  //   this.setData({
  //     authModalShow: !this.data.authModalShow
  //   })
  // },
  //关闭弹窗
  closeModalHandle() {
    // console.log("外部弹窗");
    this.setData({
      authModalShow: false
    })
  },
  //授权成功 关闭弹窗
  authSuccessHandle(e) {
    console.log(e.detail);
    wx.showTabBar();
    this.closeModalHandle();
   
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function(options) {
    let isAuth = wx.getStorageSync("isAuth")
    //isAuth=true 已授权 authModalShow=false
    //isAuth=false/undefined 未授权 authModalShow=true
    // this.setData({
    //   authModalShow: !isAuth,
    // });
    if(!isAuth){
      wx.hideTabBar()
    }
    this.setData({
      authModalShow: isAuth
    })
    

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function(options) {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})