// pages/user/center/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  // 获取用户信息
  getUserInfoHandle(e) {
    let { errMsg, userInfo } = e.detail;
    console.log(e.detail)
    //允许 将用户的信息通过 ajax  ·返回后台。
    if (errMsg = "getUserInfo:ok") {
      //...ajax
    }
    //拒绝
    if (errMsg = "getUserInfo:fail auth deny") {
      //提示用户
    }
  },
  // 自定义分享
  onShareAppMessage() {
    return {
      title: '你若离去，后会无期',
      imageUrl: '../../../static/img/good1.png'
    }
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


})