//app.js
// import User from './api/index.js'
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录 
    //  wx.login获取code
    wx.login({
      success: async ({ code }) => {
        let { status, token } = await this.post("/user/token", { code })
        //存储token
        if (status) {
          // 存储数据 同步
          wx.setStorageSync("token", token)
        }
      }
    }),
      // 获取授权
      wx.getSetting({// ↓解构
        success({ authSetting }) {
          // console.log(authSetting);
          //userinfo未授权
          if (!authSetting['scope.userInfo']) {
            wx.setStorageSync("isAuth", false);
            // wx.showModal({
            //   title: '通知',
            //   content: '未授权，请设置授权',
            //   success(res) {
            //     //点击确定按钮
            //     if (res.confirm) {
            //       wx.openSetting({
            //         success(result) {
            //           console.log(result);
            //         }
            //       })
            //     }
            //   }
            // })
          }
          //已授权
          wx.setStorageSync("isAuth", true);
          wx.getUserInfo({
              success: ({userInfo}) => {
                wx.setStorageSync("userInfo", userInfo)
              }
          })
        }
      })

  },
  globalData: {
    userInfo: null,
    //后台api接口
    api: "http://localhost:3000/api",
    host: "http://localhost:3000"
  },
  //**************封装ajax （promise）
  ajax({ url, data, method, config }) {
    //显示loading，在请求中
    wx.showLoading({
      title: '加载中',
    })

    //获取缓存 
    let token = wx.getStorageSync('token');
    //设置头部信息header
    //微信小程序login之后，获得临时登录凭证code，再使用code换取登录token,
    // 请在头部headers中 设置Authorization: Bearer ${ token }, 所有请求都必须携带token;
    let headerConfig = {
      'content-type': 'application/json',
      Authorization: `Bearer ${token}`,
    };

    //拼接完整的api地址 "https://localhost:3000"+"/api/address"
    url = this.globalData.api + url;
    let promise = new Promise((resolve, reject) => {
      wx.request({
        url,
        data,
        method,
        header: Object.assign({}, headerConfig, config),
        success: function (res) {
          //隐藏loading
          wx.hideLoading();
          if (res.statusCode == 200) {
            resolve(res.data);
          } else {
            //错误信息处理
            wx.showModal({
              title: '提示',
              content: '服务器错误，请联系客服',
              showCancel: false,
            })
            resolve(res.data)
          }
        },
        fail: function (error) {
          reject();
        }

      })
    });
    return promise;
  },
  post(url, data) {
    return this.ajax({
      url,
      data,
      method: "POST"
    })
  },
  put(url, data) {
    return this.ajax({ url, data, method: "PUT" });
  },
  get(url, data) {
    return this.ajax({
      url,
      data,
      method: "GET"
    })
  },
  delete(url, data) {
    return this.ajax({
      url,
      data,
      method: "DELETE"
    })
  }
})