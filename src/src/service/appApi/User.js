const Router = require('koa-router')
const mongoose = require('mongoose')

let router = new Router()

router.get('/',async (ctx) =>{
    ctx.body = '这是用户操作首页'
})
router.post('/register',async(ctx)=>{
    const User = mongoose.model('User')
    //接受的post数据封装晨给一个新的user对象
    let newUser = new User(ctx.request.body)
    await newUser.save().then(()=>{
        ctx.body={
            code:200,
            message:'注册成功'
        }
    }).catch(error=>{
        ctx.body={
            code:500,
            message:error
        }
    })
})
router.post('/login',async(ctx)=> {
    //得到前台传过来的数据
    let loginUser = ctx.request.body
    let userName = loginUser.userName
    let password = loginUser.password
    const User = mongoose.model('User')
    //查找用户名是否存在，如果存在开始对比密码
    await User.findOne({userName:userName}).exec().then(async(result)=>{
        if (result) {
            if(password === result.password) {
                ctx.body ={code:200,message:'登录成功'}
            }else {
                ctx.body = {code:500,message:'密码错误'}
            }
        }else {
            ctx.body={code:500,message:'用户名不存在'}
        }
        }).catch(error=>{
            console.log(error)
            ctx.body = {code:500,message:error}
        })
})
module.exports = router;
