// pages/user/address/addressEdit/addressEdit.js


import { Address } from '../../../api/index.js'
// 表单验证数据
var graceChecker = require('../../../utils/graceChecker.js')

Page({

  data: {
    id: '',
    region: ['选择省份', '选择城市', '选择地区'],
    address: {},
  },

  onLoad: function (options) {
    this.loadAddress(options.id)

  },
  async loadAddress(id) {
    let { status, data } = await Address.detail({ id });
    if (status) {
      this.setData({
        "id": id,
        "address": data,
        "region[0]": data.province,
        "region[1]": data.city,
        "region[2]": data.area,
      })
    }
  },
  regionChange: function (e) {
    this.setData({
      region: e.detail.value
    })
  },
  async submitHandle(e) {
    let formData = e.detail.value;
    formData.id = this.data.id;
    formData.isDefault = 0;
    formData.province = formData.region[0];
    formData.city = formData.region[1];
    formData.area = formData.region[2];
    console.log(formData);
    let rule = [{
      name: "name",
      checkType: "notnull",
      errorMsg: "请填写名称!"
    },
    {
      name: "tel",
      checkType: "notnull",
      errorMsg: "请填写电话"
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
    let checkRes = graceChecker.check(formData, rule);
    if (checkRes) {
      let {status,msg} = await Address.edit(formData);
      if (status) {
        wx.showToast({
          title: "编辑成功!",
          duration: 2000,
          complete() {
            wx.navigateTo({
              url: '../addressList/addressList',
            })
          }
        })
      } else {
        wx.showToast({
          title: "编辑失败",
          icon: "none"
        });
      }
    } else {
      wx.showToast({
        title: graceChecker.error,
        icon: "none"
      });
    }
  }
})