<template>
  <div class="title">
    <span class="text">{{ text }}</span>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String
    }
  }
}
</script>

<style lang="stylus" scoped>
@import "../../common/stylus/mixin";
  .title
    wh(100%, 28px)
    background-color #f5f8f8
    border-top 1px solid #cccfcf
    border-bottom 1px solid #ccd1d2
    line-height 28px
    .text
      padding-left 10px
      sc(14px, #686b77)
</style>

