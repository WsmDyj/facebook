<template>
<div class="container">
        <div class="content">
            <div class="title">加入Facebook</div>
            <div class="desc">新建用户，只需简单几步就搞定啦!</div>
            <router-link to="/regname">
                <FB-Button>开始</FB-Button>
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
                margin-bottom 34px  
   
             
</style>
