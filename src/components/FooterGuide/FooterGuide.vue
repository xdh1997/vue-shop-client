<template>
  <div class="footer_guide border-1px">
    <!--    当class的名字确定时，但是不确定是否需要，则使用对象的方式  -->
    <a href="javascript:;" class="guide_item" :class="{on: isCurrentPage('/home')}" @click="goto('/home')">
      <span class="item_icon">
        <i class="iconfont icon-waimai"></i>
      </span>
      <span>外卖</span>
    </a>
    <a href="javascript:;" class="guide_item" :class="{on: isCurrentPage('/search')}" @click="goto('/search')">
      <span class="item_icon">
        <i class="iconfont icon-search"></i>
      </span>
      <span>搜索</span>
    </a>
    <a href="javascript:;" class="guide_item" :class="{on: isCurrentPage('/order')}" @click="goto('/order')">
      <span class="item_icon">
        <i class="iconfont icon-order2"></i>
      </span>
      <span>订单</span>
    </a>
    <a href="javascript:;" class="guide_item" :class="{on: isCurrentPage('/personal')}" @click="goto('/personal')">
      <span class="item_icon">
        <i class="iconfont icon-person2"></i>
      </span>
      <span>我的</span>
    </a>
  </div>
</template>

<script>
  export default {
    methods: {
      isCurrentPage(path) {
        return this.$route.path === path
      },

      goto(path) {
        this.$router.replace(path)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .footer_guide  //footer
    top-border-1px(#e4e4e4)
    position fixed
    z-index 100
    left 0
    right 0
    bottom 0
    background-color #fff
    width 100%
    height 50px
    display flex
    .guide_item
      display flex
      flex 1
      text-align center
      flex-direction column
      align-items center
      margin 5px
      color #999999
      &.on
        color #4cd96f
      span
        font-size 12px
        margin-top 2px
        margin-bottom 2px
        .iconfont
          font-size 22px
</style>
