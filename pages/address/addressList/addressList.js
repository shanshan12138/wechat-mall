// mall/addressList/addressList.js
import { Address } from '../../../api/index.js'

Page({
  data: {
    addressData: []
  },
  onLoad() {
    this.loadList();
  },
  async loadList() {
    let { status, data, msg } = await Address.list();
    if (status) {
      this.setData({
        "addressData": data
      })
    }
  },
  editHandle(e) {
    let id = e.currentTarget.dataset['id'];
    wx.navigateTo({
      url: '../addressEdit/addressEdit?' + 'id=' + id,
    })
  },
  deleteHandle(e) {
   
    // 解决this指向
    const self = this;
    console.log(e);
    let id = e.currentTarget.dataset['id'];
    wx.showModal({
      title: '警告',
      content: '是否删除该地址?',
      confirmText: '删除',
      confirmColor: '#ff0000',
      async success({confirm ,cancel}) {
        if (confirm){
          let { status, msg } = await Address.remove({ id });
          if (status) {
            wx.showToast({
              title: '删除成功',
            })
            self.loadList();
          }
        }
        
      }
    })
  }
})