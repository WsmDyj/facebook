const mongoose = require('mongoose');
const db = "mongodb://localhost/simle-db";
const glob = require('glob'); // glob：node的glob模块允许你使用 * 等符号，来写一个glob规则，像在shell里一样，获取匹配对应规则文件。
const {resolve} = require('path') // resolve: 将一系列路径或路径段解析为绝对路径。

mongoose.Promise = global.Promise;
exports.connect = () => {
    // 链接数据库
    mongoose.connect(db) 
    let maxConnectTimes = 0;  // 声明一个最大链接数
    return new Promise((resolve,reject) => {// 把所有连接放到这里 
        // 增加数据库监听事件
        mongoose.connection.on('disconnected',()=>{
            console.log('***********数据库断开***********')
            if(maxConnectTimes<3){
                maxConnectTimes++
                mongoose.connect(db)    
            }else{
                reject()
                throw new Error('数据库出现问题')
            }
        })
        mongoose.connection.on('error',err=>{
            console.log('***********数据库错误***********')
            if(maxConnectTimes<3){
                maxConnectTimes++
                mongoose.connect(db)   
            }else{
                reject(err)
                throw new Error('数据库出现问题')
            }
        })
        // 链接打开的时
        mongoose.connection.once('open',()=>{
            console.log('MongoDB connected successfully') 
            resolve()   
        })
    })
}
// 一次性引入所用的Schema文件
exports.initSchemas = () =>{
    glob.sync(resolve(__dirname,'./schema/','**/*.js')).forEach(require)
}
 