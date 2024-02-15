const mongoos = require("mongoose")
const Schema = mongoos.Schema
//news模型===>news集合

const ProductType = {
    title:String,
    introduction:String,
    detail:String,
    cover:String,//封面
    isPublish:Number,//0 未发布，1 已发布
    editTime:Date
}
const ProductModel = mongoos.model("product",new Schema(ProductType))

module.exports = ProductModel