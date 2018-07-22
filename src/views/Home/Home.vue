<template>
    <div class="home">
        <div class="content" ref="wrapper">
            <div class="container">
            <HeaderTop></HeaderTop>
            <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
                <div class="header-wrapper">
                    <router-link to="/share">
                        <div class="header-title">
                            <div class="avatar">
                                <img src="../../assets/images/dog.jpg"  alt="">
                            </div>
                            <span class="title">分享新鲜事</span>
                        </div>
                    </router-link>
                    <div class="header-operation">
                        <ul>
                            <li>
                                <router-link to="/notice">
                                    <i class="iconfont icon-biji icon1"></i>
                                    <span class="desc">状态</span>
                                </router-link>
                            </li>
                            <li>
                                <van-uploader :after-read="onRead">
                                    <i class="iconfont icon-zhaopian icon2"></i>
                                    <span class="desc">照片</span>
                                </van-uploader>
                            </li>
                            <li>
                                <router-link to="/notice">
                                    <i class="iconfont icon-biaoji icon3"></i>
                                    <span class="desc">签到</span>
                                </router-link>
                            </li>
                        </ul>
                    </div>
                </div>
                <Split></Split>
                <div class="snapshot-wrapper">
                    <div class="title">快拍</div>
                    <div class="snapshot">
                        <img src="../../assets/images/snapshot.png" alt="snapshot">
                        <span class="text">新快拍</span>
                    </div>
                </div>
                <Split></Split>
                <Dynamic></Dynamic>
                <Recommended></Recommended>
            </van-pull-refresh>
            </div>
        </div>
        <TabBar></TabBar>
        <router-view/>
    </div>
</template>

<script>
import HeaderTop from '@/components/HeaderTop/HeaderTop'
import TabBar from '@/components/TabBar/TabBar'
import Dynamic from '@/components/Dynamic/Dynamic'
import Split from '@/components/Split/Split'
import Recommended from '@/components/Recommended/Recommended'
import BScroll from 'better-scroll'
export default {
    data () {
        return {
            isLoading: false      
        }
    },
    components: {
        HeaderTop,
        TabBar,
        Split,
        Dynamic,
        Recommended,
    },
    methods: {
        onRead (file) {
            console.log(file)
        },
        onRefresh() {
        setTimeout(() => {
            this.$toast('刷新成功');
            this.isLoading = false;
        }, 500);
        }
    
    },
    mounted () {
        if (this.isLoading === false) {
        this.$nextTick(() => {
                this.scroll = new BScroll(this.$refs.wrapper,{
                    click: true,
                    bounce: false
                });
            });
        }
      
    },
  
}
</script>

<style lang="stylus" scoped>
@import "../../common/stylus/mixin";
.content
    position absolute
    bottom 44px
    width 100%
    top 0
    overflow hidden
    .header-wrapper
        wh(100%, 102px)
        box-sizing border-box
        .header-title
            wh(100%, 64px)
            border-bottom  1px solid $bc
            line-height 64px
            .avatar
                margin 12px 12px
                display inline-block
                vertical-align top
                img 
                    wh(40px, 40px)
                    border-radius 50%
            .title
                sc(18px, #333)
        .header-operation
            wh(100%, 38px)
            ul
                flex(row)
                wh(100%, 38px)
                li
                    text-align center
                    .desc
                        sc(16px, #333)
                    .icon1
                        sc(16px, #8c72cb)
                    .icon2
                        sc(16px, #89be4c ) 
                    .icon3
                        sc(16px, #f5156f)
    .snapshot-wrapper
        wh(100%, 150px)
        box-sizing border-box
        padding 12px 12px
        .title
            sc(16px, #333)
            font-weight 600
        .snapshot
            wh(67px,74px)
            text-align center
            margin-top 25px
            img 
                wh(67px, 67px)
                display inline-block
            .text
                sc(14px, #24212f)
</style>

