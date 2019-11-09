// components/Auth-Modal/index.js
Component({
  /**
   * 组件的属性列表
   */
  //组件的对外属性
  properties: {
    isShow: {
      type: Boolean,
      value: false,
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 关闭modal
    closeHandle() {
      console.log("内部colse");
      this.triggerEvent('close');
    },
    getUserInfoHandle(e) {
      let {
        errMsg,
        userInfo
      } = e.detail;
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

  }
})