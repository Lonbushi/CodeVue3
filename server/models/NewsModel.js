const mongoos = require("mongoose")
const Schema = mongoos.Schema
//news模型===>news集合

const NewsType = {
    title:String,
    content:String,
    category:Number,//类别，1，2，3
    cover:String,//封面
    isPublish:Number,//0 未发布，1 已发布
    editTime:Date
}
const NewsModel = mongoos.model("news",new Schema(NewsType))

module.exports = NewsModel