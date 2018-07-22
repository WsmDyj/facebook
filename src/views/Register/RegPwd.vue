<template>
    <div class="reg-container">
        <div class="conter-wrapper">
            <div class="reg-title">
                创建密码
            </div>
            <div class="reginput">
                <input type="reg-text" placeholder="请输入密码" v-model="password">
            </div>
            <div class="desc">
                <span class="text">请确保密码不少于六个字符,且应包括数字、字母、和符号&nbsp;&nbsp;(例如! 和 &)&nbsp;&nbsp;这些元素</span>
            </div>
            <router-link to="/regLast">
                 <FB-Button>继续</FB-Button>
            </router-link>
           
        </div>
        <FB-Bottom></FB-Bottom>
    </div>
</template>
<script>
import Bottom from '@/components/Bottom/Bottom'
import Button from '@/components/Button/Button'
export default {
    data () {
        return {
            password: ''
        }
    },
    components: {
        'FB-Bottom': Bottom,
        'FB-Button': Button
    }
}
</script>

<style lang="stylus" scoped>
 @import "../../common/stylus/mixin";
.reg-container
    wh(100%, 100vh)
    background-color $rg
    .conter-wrapper
        flex(column)
        margin-top -30%
        ct()
        .reg-title
            sc(20px,#4267b2)
            margin-bottom 20px
        .reginput
           margin-bottom 13px 
        input 
            wh(343px, 40px)
            border-radius 5px
            padding-left 11px
        .desc
            text-align center
            .text
                sc(14px, #4e5665)
</style>
