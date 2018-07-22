<template>
<div class="container">
  <van-nav-bar title="创建帖子" left-text="取消" right-text="发布"  @click-left="onClickLeft" @click-right="onClickRight">
    <van-icon name="share" />
  </van-nav-bar>
  <div class="header-title">
    <div class="avatar">
      <img src="../../assets/images/dog.jpg"  alt="">
    </div>
    <span class="title">分享新鲜事</span>
  </div>
</div>
</template>

<script>
export default {
  methods: {
    onClickLeft() {
      this.$router.go(-1)
    },
    onClickRight() {
      Toast('按钮');
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
</style>

