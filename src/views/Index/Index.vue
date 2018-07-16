<template>
<div>
    <div class="contrainer">
        <div class="header">
            <img src="../../assets/images/header.png" alt="header">
        </div>
        <div class="content">
            <form class="loginForm" @submit.prevent="LoginAction">
                <section class="input_container">
                    <input type="text" placeholder="账号" v-model="userName"  required>
                </section>
                <section class="input_container">
                    <input type="password" placeholder="密码"  v-model="password"  required>
                </section>
                <FB-Button login>
                    <span>登录</span> 
                    <div class="loading" v-show="isLoading">
                        <van-loading type="spinner" color="white" size="20px" />
                    </div>
                </FB-Button>
            </form>
        </div>
        <div class="foot">
            <div class="title">
                <div class="line"></div>
                <div class="text">或</div>
                <div class="line"></div>
            </div>
            <router-link to="/register">
                <FB-Button register>注册Facebook账号</FB-Button>
            </router-link>
                
        </div>
    </div>
</div>
</template>
<script>
import axios from 'axios'
import url from '@/api/serviceAPI.config.js'
import Button from '@/components/Button/Button'
import { Toast, Loading } from 'vant'
export default {
    data () {
        return {
            userName: '',
            password: '',
            usernameErrorMsg:'',   
            passwordErrorMsg:'',    
            isLoading: false ,
        }
    },
    methods: {
        LoginAction () {
            this.axiosLoginUser()
        },
        axiosLoginUser () {
            axios({
                    url: url.loginUser,
                    method: 'post',
                    data:{
                        userName:this.userName,
                        password:this.password 
                    }
                })
                .then(response => {
                    if(response.data.code==200){
                        this.isLoading = true
                        setTimeout(()=>{
                            Toast.success('登录成功')
                            this.$router.push('/home')
                            this.isLoading = false
                        },1000)
                       
                }else{
                    this.isLoading= true
                    setTimeout(()=> {
                        this.isLoading = false
                        Toast.fail(response.data.message)
                    },1000)
                }    
            })
            .catch((error) => {   
                console.log(error)
                Toast.fail('登录失败')
            })
        }
    },
    components: {
        'FB-Button': Button,
    },
}
</script>

<style lang="stylus" scoped>
 @import "../../common/stylus/mixin";
    .header
        wh(100%, 230px)
        background-color #4267d2
        img 
            wh(100%, 100%)
    .content
        width 343px
        margin 20px auto 0 auto 
        .input_container
            border 1px solid #ccd0d5
            input 
                box-sizing border-box
                wh(100%, 41px)
                padding-left 13px
                outline none
        .loading
            position absolute
            right 0
            margin-top -18px
            margin-right 25px
    .foot
        position absolute
        bottom 0
        left 0
        right 0
        width 343px
        margin 0 auto 16px auto
        .title
            width 234px
            display flex
            margin 0 auto 26px auto
            align-items center
            .line
                width 104px
                border 1px solid $bc
                transform scaleY(0.5)
            .text
                padding 0 8px 0 8px
                font-weight 700
                fc(16px, #000)
</style>

