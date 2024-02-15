const mongoos = require("mongoose")
const Schema = mongoos.Schema
//news模型===>news集合

const UploadType = {
    src:String,
    alt:String,
    url:String,
    href:String,//封面
    fill:String
}
const UploadModel = mongoos.model("upload",new Schema(UploadType))

module.exports = UploadModel