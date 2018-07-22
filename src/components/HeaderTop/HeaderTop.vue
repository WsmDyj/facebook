<template>
    <div class="container">
        <div class="content-wrapper">
            <van-uploader :after-read="onRead">
                <i class="iconfont icon-xiangji icon"></i>
            </van-uploader>
            <div class="content">
               <input type="text" class="search-input" placeholder="搜索" v-model="value" @focus="handleFocus">
                <i class="iconfont icon-search search"></i>
                <div class="visible" v-if="cancelIcon" @click="clearInfo">
                    <i class="iconfont icon-z-quxiao cancel"></i>
                </div>
            </div>
            <div class="messenger" v-if="!focus" >
                <i class="iconfont icon-iconfont7 icon" v-if="this.$route.path =='/users'"></i>
                <i class="iconfont icon-FacebookMessenger icon" v-else></i>
            </div>
            <div class="messenger" v-if="focus">
               <span class="text" @click="cancel">取消</span>
           </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      value: "",
      focus: false
    };
  },
  methods: {
    handleFocus() {
      this.focus = true;
    },
    cancel() {
      this.value = "";
      this.focus = false;
    },
    clearInfo() {
      this.value = "";
    },
    onRead(file) {
      console.log(file)
    }
  },
  computed: {
    cancelIcon() {
      if (!this.value || this.focus === false) {
        return false;
      }
      return true;
    }
  }
};
</script>
<style lang="stylus" scoped>
@import '../../common/stylus/mixin';
.container {
    background-color: #4267b2;
    wh(100%, 64px);
    .content-wrapper {
        wh(100%, 64px);
        flex(row);
        .search-input {
            wh(280px, 30px);
            border-radius: 20px;
            line-height: 30px;
            background-color: #29487d;
            -webkit-tap-highlight-color: transparent;
            sc(15px, #fff);
            box-sizing: border-box;
            outline: none;
            padding-left: 40px;
        }
        placeholder(#909cc0);
        .search {
            position: absolute;
            top: 0;
            margin-left: 12px;
            margin-top: 24px;
            sc(16px, #909cc0);
        }
        .cancel {
            position: absolute;
            sc(16px, #909cc0);
            top: 0;
            right: 0;
            margin-top: 24px;
            margin-right: 90px;
        }
        .icon {
            sc(25px, #ffffff);
        }
        .text {
            sc(16px, #fff);
        }
    }
}
</style>
