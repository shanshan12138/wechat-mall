import { Goods } from '../../../api/index.js'
let app = getApp();
Page({
  data: {
    focus: false,
    inputValue: '',
    currentTab: 0,
    list: [],
    host: app.globalData.host,
    currentIndex:1,//当前第几页
    isEnd:false,//是否无新数据

  },
  //获取商品列表
  async loadList() {
    // 当前第几页
    let i = this.data.currentIndex;   
    
    let { status, goods } = await Goods.list({ pageIndex: i , pageSize: 5});
    if (status) {
      // 暂无新数据
      if(goods.length==0){
        wx.showToast({
          title: '暂无新数据',
          icon:'none',
        });
        this.setData({
          currentIndex:i-1,
          isEnd:true
        });
        return;
      }
      // 表示判断 如果是下拉刷新 调用刷新函数
      if(i==1){
        this.setData({
          list: goods
        });
        wx.stopPullDownRefresh();
        return;
      }
      //i>=2上拉加载
      let {list}=this.data;
      let listData=list.concat(goods);
      this.setData({
        list: listData
      });
      wx.stopPullDownRefresh();
    }
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    this.loadList();
  },
  // 下拉刷新
  onPullDownRefresh: function () {
    // this.loadlist(1)
  },

  
  

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    //无新数据
    if (this.data.isEnd) {
        wx.showToast({
          title: '暂无新数据',
          icon: 'none'
        });
        return;
    }
    this.setData({
      currentIndex: ++this.data.currentIndex
    })
    this.loadList();
    console.log("上拉加载")
  },
})