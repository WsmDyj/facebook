<template>
<div class="recommended">
  <div class="container">
      <div class="header">可能认识的人</div>
      <div class="tab" ref="wrapper">
        <div class="tab_content" ref="tabcontent">
          <div class="content">
            <img src="../../assets/images/dog.jpg" alt="">
            <div class="info">
              <div class="name">Junais Muthu</div>
              <div class="desc">Belahi trading company</div>
              <Button add>加为好友</Button>
              <div class="remove">移除</div>
            </div>
          </div>
          <div class="content">
            <img src="../../assets/images/dog.jpg" alt="">
            <div class="info">
              <div class="name">Junais Muthu</div>
              <div class="desc">Belahi trading company</div>
              <Button add>加为好友</Button>
              <div class="remove">移除</div>
            </div>
          </div>
          <div class="content">
            <img src="../../assets/images/dog.jpg" alt="">
            <div class="info">
              <div class="name">Junais Muthu</div>
              <div class="desc">Belahi trading company</div>
              <Button add>加为好友</Button>
              <div class="remove">移除</div>
            </div>
          </div>
          <div class="content">
            <img src="../../assets/images/dog.jpg" alt="">
            <div class="info">
              <div class="name">Junais Muthu</div>
              <div class="desc">Belahi trading company</div>
              <Button add>加为好友</Button>
              <div class="remove">移除</div>
            </div>
          </div>
          </div>
      </div>
  </div>
  <div class="footer">
        显示全部
  </div>
  <Split></Split>
</div>
</template>
<script>
import Button from '@/components/Button/Button'
import Split from '@/components/Split/Split'
import BScroll from 'better-scroll'
export default {
  components: {
    Button,
    Split
  },
  mounted () {
    let width = 180 * 5 - 125
   this.$refs.tabcontent.style.width=width+'px'

    this.$nextTick(()=>{
      if (!this.scroll) {
          this.scroll=new BScroll(this.$refs.wrapper, {
              startX:0,
              click:true,
              scrollX:true,
              scrollY:false,
              eventPassthrough:'vertical'
          })
      }else{
          this.scroll.refresh()
      }
    })
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
      margin-top 13px
      sc(16px, #333)
      font-weight 700
    .tab
      wh(375px,320px)
      overflow hidden
      font-size 0
      .content
        wh(180px,300px)
        margin-left 5px
        border-sizing border-box
        margin-top 12px
        border 1px solid #dddfe2
        background-color #fafafa
        box-shadow:4px 4px 8px #EBEBEB;
        display inline-block
        img 
          wh(100%,180px)
        .name, .desc
          margin-left 10px
        .name
          sc(14px,#333)
          font-weight 700
          margin-top 10px
        .desc
          margin-top 5px
          sc(14px, #616770)  
        .remove
          height 35px
          line-height 35px
          text-align center 
          sc(18px,#4e5665)    
  .footer
    wh(100%, 48px)
    line-height 48px
    text-align center
    sc(16px, #616770)
</style>
