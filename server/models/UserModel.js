const mongoos = require("mongoose")
const Schema = mongoos.Schema
//user模型===>users集合

const UserType = {
    username:String,
    password:String,
    gender:Number,//性别 ， 0，1，2
    introduction:String,//简介
    avatar:String,
    role:Number //管理员1，编辑2
}
const UserModel = mongoos.model("user",new Schema(UserType))

module.exports = UserModel