// mall/addressIncrease/addressIncrease.js

import { Address } from '../../../api/index.js'
// 表单验证数据
var graceChecker = require('../../../utils/graceChecker.js')

Page({
  data: {
    region: ['选择省份', '选择城市', '选择地区'],
  },

  onLoad: function (options) {

  },
  regionChange: function (e) {
    this.setData({
      region: e.detail.value
    })
  },
  async submitHandle(e) {
    let formData = e.detail.value;
    formData.isDefault = 0;
    formData.province = formData.region[0];
    formData.city = formData.region[1];
    formData.area = formData.region[2];
    // console.log(formData)
    let rule = [{
      name: "name",
      checkType: "notnull",
      errorMsg: "姓名不能为空!"
    },
    {
      name: "tel",
      checkType: "phoneno",
      errorMsg: "请输入11位手机号码"
    },
    {
      name: "region",
      checkType: "notnull",
      errorMsg: "请选择地区"
    },
    {
      name: "street",
      checkType: "notnull",
      errorMsg: "请填写详细街道"
    },
    {
      name: "code",
      checkType: "notnull",
      errorMsg: "请填写邮编"
    },
    ];
    //表单验证
    let isValid = graceChecker.check(formData, rule);
    if (isValid) {
      let { status, msg } = await Address.add(formData);
      if (status) {
        wx.showToast({
          title: "地址添加成功!",
          duration: 2000,
          complete() {
            wx.navigateTo({
              url: '../addressList/addressList',
            })
          }
        })
      } else {
        wx.showToast({title: "上传失败",icon: "none"});
      }
    } else {
      wx.showToast({title: graceChecker.error,icon: "none"});}
  }

})