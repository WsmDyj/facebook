<template>
    <div class="container" @click="handleLogin">
        <span class="text">有账户了？</span>
    </div>
</template>

<script>
export default {
    methods: {
        handleLogin () {
            this.$router.push('/')
        }
    }
}
</script>

<style lang="stylus" scoped>
 @import "../../common/stylus/mixin";
     .container
        wh(100%, 43px)
        background-color $rg
        line-height 43px
        text-align center
        position fixed
        bottom 0
        left 0
        right 0
        border-1px(#ccd0d5)
        .text
            color $fb
            
</style>

