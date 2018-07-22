<template>
    <div class="container">
        <ul class="tabBar">
            <li>
                <router-link to="/home" exact>
                    <i class="iconfont icon-erji-wangyefangcuangai icon"></i>
                </router-link>
            </li>
            <li>
                <router-link to="/users">
                    <i class="iconfont icon-users icon"></i>
                </router-link>
            </li>
            <!-- <li>
                <router-link to="/video">
                    <i class="iconfont icon-dianshi icon"></i>
                </router-link>
            </li> -->
            <li> 
                <router-link to="/notice">
                    <i class="iconfont icon-tongzhi icon"></i>
                </router-link>
            </li>
            <li>
                <router-link to="/about">
                    <i class="iconfont icon-sanheng icon"></i>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
@import "../../common/stylus/mixin";
    .tabBar
        position fixed
        flex(row)
        wh(100%, 44px)
        bottom 0
        left 0
        z-index 999
        border-1px(#ccd0d5)
        & > li
            display table-cell
            .router-link-active  
                & > i 
                    color #5890ff 
        .icon 
            sc(23px, #616770)
</style>
