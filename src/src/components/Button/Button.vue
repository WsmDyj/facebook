<template>
    <div class="container">
        <button class="btn" :class="[{'loginBtn': login,'registerBtn':register}]" >
            <slot/>
        </button>
    </div>
</template>

<script>
export default {
    props: {
        register: Boolean,
        login: Boolean
    }
}
</script>

<style lang="stylus" scoped>
 @import "../../common/stylus/mixin";
    .btn
        wh(343px, 36px)
        border-width 0px 
        border-radius 3px 
        background #5890ff
        cursor pointer
        outline: none
        font-family Microsoft YaHei
        color white 
        font-size 17px
        margin-top 12px
    .loginBtn
        background #577fbc
    .registerBtn
        border 1px solid #3578e5
        color #3578e5
        background-color #ffffff 
</style>
