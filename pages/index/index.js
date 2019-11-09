// pages/contact/index.js
Page({

  onShareAppMessage() {
    return {
      title: 'swiper',
    }
  },

  data: {
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
})