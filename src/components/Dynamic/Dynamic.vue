<template>
<div class="dynamic">
  <div class="container">
    <div class="header">
      <div class="avatar">
        <img src="../../assets/images/dog.jpg" alt="">
      </div>
        <div class="info">
          <span class="title">
            <span class="name">Vinoth Kumar</span> 分享了帖子 
            <i class="iconfont icon-sangedian icon"></i>
          </span>
          <div class="time">
            星期二下午12:41 •
              <i class="iconfont icon-users icon"></i>
          </div>
        </div>
    </div>
    <div class="content-wrapper">
      <div class="cover">
        <img src="../../assets/images/dynamic.png" alt="">
      </div>
      <div class="content">
        <div class="title">
          <span class="title-name">世界表情符号日快乐</span>
          <span class="title-time">7月14日 • 世界表情符号日
              <i class="iconfont icon-gantanhao "></i>
          </span>
        </div>
        <div class="desc">
          我们聊天对话时少不了的表情符号原来也有专属的节日！
          Facebook全员希望你和好友今天用各种可爱小表情包撒欢!
        </div>
      </div>
    </div>
    <div class="thumbs" v-if="isVisable">
        <i class="iconfont icon-quanqiugoudianzan icon"></i>
        <span class="text">1人</span>
    </div>
    <div class="operation">
        <div class="like" @click="chose">
           <i class="iconfont icon-zan text" :class="{'change':this.isVisable==true}"></i>
           <span class="text" :class="{'change':this.isVisable==true}">赞</span>
        </div>
        <div class="comments">
           <i class="iconfont icon-pinglun text"></i>
           <span class="text">评论</span>
        </div>
        <div class="share">
           <i class="iconfont icon-share text"></i>
           <span class="text">分享</span>
        </div>
      </div>
  </div>
    <Split></Split>
</div>
</template>

<script>
import Split from '@/components/Split/Split'
export default {
  data () {
    return {
      isVisable: false  
    }
  },
  components: {
    Split
  },
  methods: {
    chose () {
      this.isVisable = !this.isVisable
    }
  }
}
</script>

<style lang="stylus" scoped>
@import "../../common/stylus/mixin";
.container
  width 93.6%
  margin-left auto 
  margin-right auto
  .header
    position relative
    wh(100%, 64px)
    .avatar
        margin-top 12px
        display inline-block
        vertical-align top
        img 
            wh(40px, 40px)
            border-radius 50%
    .info
        sc(18px, #333)
        margin-top 12px
        display inline-block
        .title
          sc(14px, #141823)
          .name
            font-weight 700
          .icon
            position absolute
            right 0
            top 0
            margin-top 12px
            sc(26px, #616770)
        .time
          sc(11px, #616770)
          padding-top 4px
  .content-wrapper
    wh(100%,100%)
    border 1px solid #dddfe2
    img 
      wh(100%,154px)
    .content
      flex(column)
      width 300px
      margin auto
      .title
        margin-top 20PX
        .title-name
          sc(18px, #141823)
          font-weight 700
          display block
        .title-time
          display block
          padding 10px 0
          sc(14px,#616770)
      .desc
        text-align center
        sc(16px, #333)
        line-height 20px
        padding-bottom 18px
  .thumbs
    wh(100%, 20px)
    margin-top 10px
    .icon
      sc(14px, #4080ff)
    .text
      sc(14px, #616770)
  .operation
    wh(100%,40px)
    margin-top 10px
    flex(row)
    border-top 1px solid #dddfe2
    .text
      sc(16px, #616770)
    .change
      color #4080ff


</style>

