<template>
    <div>
        <HeaderTop></HeaderTop>
        <Title text="新好友"></Title>

        <Title text="加好友请求"></Title>
        <div class="notice">
            <span class="desc">没有加好友请求</span>
        </div>
        <Title text="可能认识"></Title>
        <div class="konwList">
           <div class="avatar">
               <img src="../../assets/images/dog.jpg" width="70px" height="70px" alt="">
           </div>
           <div class="info">
               <div class="name">SIMN JACK</div>
               <div class="btns">
                   <div class="addBtn">
                        <Button small>加为好友</Button>
                   </div>
                    <div class="removeBtn">
                        <Button small type >移除</Button>
                    </div>
               </div>
           </div>
        </div>
        <TabBar></TabBar>
    </div>
</template>

<script>
import HeaderTop from '@/components/HeaderTop/HeaderTop'
import TabBar from '@/components/TabBar/TabBar'
import Title from '@/components/Title/Title'
import Button from '@/components/Button/Button'
import { usersgroups } from '@/api/getDate'
export default {
    components: {
        HeaderTop,
        TabBar,
        Title,
        Button
    },
    methods: {
        async getusersgroups() {
            const res =await usersgroups();
            console.log(res)
        }
    },
    created () {
        this.getusersgroups()
    },
}
</script>

<style lang="stylus" scoped>
@import "../../common/stylus/mixin";
    .notice
        wh(100%, 69px)
        line-height 69px
        text-align center
        .desc
            sc(16px, #181c22)
            font-weight 700 
    .konwList
        wh(96.8%, 80px)
        border-bottom 1px solid $bc
        margin-left 12px 
        display  flex
        align-items center
        .info
            margin-left 9px            
            .name
                sc(14px, #181e2b)
                font-weight 700
            .addBtn, .removeBtn
                display inline-block
                



</style>

