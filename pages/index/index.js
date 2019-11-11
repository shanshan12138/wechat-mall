// pages/contact/index.js
import { Goods } from '../../api/index.js'
let app = getApp();

Page({
  onShareAppMessage() {
    return {
      title: 'swiper',
    }
  },

  data: {
    // 热门推荐
    focus: false,
    inputValue: '',
    currentTab: 0,
    list: [],
    host: app.globalData.host,
  //  新品上市
    newproducts: [{
      name: '电动牙刷',
    }, {
      name: '电动牙刷'
    }, 
    {
      name: '电动牙刷'
    }],
    imgUrls: [
      '../../static/img/index/swiper-1.png',
      '../../static/img/index/swiper-2.png',
      '../../static/img/index/swiper-3.png',
      '../../static/img/index/swiper-1.png',
      '../../static/img/index/swiper-2.png',
      '../../static/img/index/swiper-3.png',
    ],
    background: ['url()', 'demo-text-2', 'demo-text-3'],
    indicatorDots: true,
    vertical: false,
    autoplay: false,
    interval: 2000,
    duration: 500
  },

  //获取商品列表
  async loadlist() {
    let { status, goods } = await Goods.list({ pageIndex: 1 });
    if (status) {
      this.setData({
        list: goods
      })
    }
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    this.loadlist();
  },
  //滑动切换
  swiperTab: function (e) {
    var that = this;
    that.setData({
      currentTab: e.detail.current
    });
  },
  //点击切换
  clickTab: function (e) {
    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  },
  iconType: [
    'success', 'success_no_circle', 'info', 'warn', 'waiting', 'cancel', 'download', 'search', 'clear'
  ],
  bindKeyInput: function (e) {
    this.setData({
      inputValue: e.detail.value
    })
  },
})