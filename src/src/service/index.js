const Koa = require('koa')
const app = new Koa();
const mongoose = require('mongoose')
const Router = require('koa-router')
const {connect , initSchemas} = require('./database/init.js')
const bodyParser = require('koa-bodyparser')
let user= require('./appApi/user.js')
const cors = require('koa2-cors')
//装载说有的子路由

let router = new Router();
app.use(cors())
router.use('/api/user',user.routes())
app.use(bodyParser());
//加载如有中间件
app.use(router.routes())
app.use(router.allowedMethods())

app.use(async(ctx)=>{
    ctx.body = '<h1>hello Koa2</h1>'
})

// 启动端口
app.listen(3000,()=>{
    console.log('[Server] starting at port 3000')
});

(async () =>{
    await connect()
    initSchemas()
    const User = mongoose.model('User')
    // let oneUser = new User({userName:'小红',password:'1234567'})
    // oneUser.save().then(()=>{
    //     console.log('插入成功')
    // })
    //读取插入的数据
    // let  users = await  User.find({}).exec()
    // console.log('------------------')
    // console.log(users)
    // console.log('------------------')  
})()


 



