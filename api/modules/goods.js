let app = getApp();

//获取商品列表
let list = (data) => app.get("/goods/list", data)


export default {
  list
}