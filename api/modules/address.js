let app = getApp();

//地址列表
let list = (data) => app.get("/address/list", data)
let add = (data) => app.post("/address", data)
let detail = (data) => app.get("/address/detail",data)
let edit = (data) => app.put("/address", data)
let remove = (data) => app.delete("/address", data)
export default {
  list,
  add,
  detail,
  edit,
  remove
}