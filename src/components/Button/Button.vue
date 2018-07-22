<template>
    <div class="container">
        <button class="btn" :class="[{'loginBtn': login,'registerBtn':register,'smallBtn':small,'type':type,'addBtn': add}]" >
            <i class="iconfont icon-jiahaoyou" v-if="add"></i>
            <slot/>
        </button>
    </div>
</template>

<script>
export default {
    props: {
        register: Boolean,
        login: Boolean,
        small: Boolean,
        type:Boolean,
        add:Boolean
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
    .smallBtn
        wh(100px,28px)
        font-size 12px
    .type 
        wh(100px,28px)
        background-color #fff
        border 1px solid $bc
        sc(12px, #575d68)
    .addBtn
        wh(160px,28px)
        sc(12px, #fff)

</style>
