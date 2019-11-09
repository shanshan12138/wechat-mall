Page({

  data: {
    currentMenuIndex: 0,
    transClassArr: ['tanslate0', 'tanslate1', 'tanslate2', 'tanslate3', 'tanslate4', 'tanslate5'],
    isActive: false,
    menuItem: [{
      id: 1,
      name: '居家生活',
    },
    {
      id: 2,
      name: '服饰鞋包',
    },
      {
        id: 3,
        name: '美食酒水',
      },
      {
        id: 4,
        name: '运动旅行',
      },
      {
        id: 5,
        name: '母婴亲子',
      },
      {
        id: 6,
        name: '数码家电',
      },
    ]
  },
//tab事件
  tapHandle(e) {
      this.setData({
        isActive: !this.data.isActive,
      })
  },
  changeCategory: function (event) {

    var that = this;

    var index = category.getDataSet(event, 'index');
    var id = category.getDataSet(event, 'id');

    this.setData({
      currentMenuIndex: index
    });


    category.getProductsByCategory(id, (data) => {
      console.log(data);
      that.setData(that.getDataObjForBind(index, data));
    });
  },



  getDataObjForBind: function (index, data) {
    var obj = {};
    var arr = [0, 1, 2, 3, 4, 5];
    var baseData = this.data.categoryTypeArr[index];
    obj['categoryInfo' + index] = {
      products: data,
      topImgUrl: baseData.img.url,
      title: baseData.name
    };

    return obj;
  },

})