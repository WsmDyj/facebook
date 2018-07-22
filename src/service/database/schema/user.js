const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const Schema = mongoose.Schema;
let ObjectId = Schema.Types.ObjectId; 

//创建我们的用户schema
const userSchema = new Schema ({
    UserId:ObjectId,
    userName:{unique:true,type:String},
    password:String,
    createAt:{type:Date,default:Date.now()},
    lastLoginAt:{type:Date,default:Date.now()}
})
//向外输出数据表
mongoose.model('User', userSchema)
// mongoose中的三个概念
//  1. schema: 用来定义表的模板，实现MongoDB数据库的映射。用来实现每个字段的类型，长度，映射的字段，不具备表的操作能力
// 2. model： 具备某张表操作能力的一个集合，是mongoose的核心。
// 3. entity： 类似记录，由Model创建的实体，也具有影响数据的操作能力