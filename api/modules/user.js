let app = getApp();

//获取token
let token = (data) => app.post("/user/token", data)
//上传用户信息
let info = (data) => app.put("/user/info", data)

export default {
  token,
  info,
}