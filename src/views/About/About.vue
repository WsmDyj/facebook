<template>
    <div class="container">
        <HeaderTop></HeaderTop>
        <div class="header">
              <div class="avatar">
                  <img src="../../assets/images/dog.jpg"  alt="">
              </div>
              <div class="center">
                <span class="name">Simin Jack</span>
                <span class="homepage">查看你的个人主页</span>
              </div>
        </div>
        <div class="wrapper" ref="wrapper">
          <div content>
            <div class="group" v-for="(group, index) in aboutgroups" :key="index">
              <div class="icon">
                  <img :src="group.src" alt="friend">
              </div>
              <span class="desc">{{group.name}}</span>
            </div>
          </div>
        </div>
        <TabBar></TabBar>
    </div>
</template>

<script>
import HeaderTop from '@/components/HeaderTop/HeaderTop'
import TabBar from '@/components/TabBar/TabBar'
import { aboutgroups } from '@/api/getDate'
import BScroll from 'better-scroll'
export default {
  data () {
    return {
      aboutgroups: []
    }
  },
  components: {
    HeaderTop,
    TabBar
  },
  methods: {
    async getaboutgroups() {
            const res =await aboutgroups();
            this.aboutgroups = res.data.about
      }  
  },
  created () {
    this.getaboutgroups()
  },
  mounted () {
    this.$nextTick(() => {
     this.scroll = new BScroll(this.$refs.wrapper);
    });
   }
}
</script>

<style lang="stylus" scoped>
@import "../../common/stylus/mixin";
  .header
    wh(90%, 64px)
    margin 0 16px
    position relative
    border-bottom  1px solid $bc
    .avatar
        ct()
        display inline-block
        img 
            wh(40px, 40px)
            border-radius 50%
    .center
      ct()
      margin-left 53px
      .name
        display block
        sc(15px, #34383f)
        font-weight 700
        padding-bottom 6px
      .homepage
        sc(14px, #61686e)
        opacity .6
  .wrapper
    position absolute
    overflow hidden
    width 100%
    top 128px
    bottom 44px 
    .group
        position relative
        wh(90%, 56px)
        margin 0 16px
        box-sizing border-box
        overflow hidden
        .icon
          ct()
          display inline-block
          img
            wh(35px,35px)
        .desc
          ct()
          margin-left 53px
          sc(16px,#222429)
</style>
