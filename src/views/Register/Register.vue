<template>
<div class="container">
    <div class="content">
        <div class="title">完成注册</div>
        <div class="desc">注册即表示你同意接受我们的Facebook条款，并已阅读我们的隐私权政策,包括Cookie使用政策。你
            可能会收到我们的短信通知，并且随时可以退订。
        </div>
        <router-link to="/home">
            <FB-Button>注册</FB-Button>
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
        }
    },
    components: {
        'FB-Bottom': Bottom,
        'FB-Button': Button
    },
}
</script>

<style lang="stylus" scoped>
 @import "../../common/stylus/mixin";
    .container
        wh(100%, 100vh)
        background-color $rg
        .content
            flex(column)
            position absolute
            top 50%
            left 50%
            transform translate(-50%,-25%) 
            .title
                sc(20px, #4267b2)
                margin-bottom 23px
            .desc
                sc(16px, #4e5665)
   
             
</style>
