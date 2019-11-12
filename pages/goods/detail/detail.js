// pages/goods/detail/detail.js
import { Goods } from '../../../api/index.js'
let app = getApp();
Page({
  onShareAppMessage() {
    return {
      title: 'swiper',
      path: 'page/component/pages/swiper/swiper'
    }
  },
  /**
   * 页面的初始数据
   */
  data: {
    background: ['url()', 'demo-text-2', 'demo-text-3'],
    indicatorDots: true,
    vertical: false,
    autoplay: false,
    interval: 2000,
    duration: 500,
    list: [],
    host: app.globalData.host,
    detail: {},
  },
  onLoad: function (options) {
    this.loadDetail(options.id)
    console.log(options.id);
  },
  //获取商品详情
  async loadDetail(id) {
    let { status, data } = await Goods.detail({ id });
    if (status) {
      data.slider = data.slider.split(",");
      let { host } = this.data;
      data.detail = data.detail.replace(/\/images/g, `${host}/images`);
      this.setData({
        detail: data,

      })
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