<template>
  <div class="loading">
    <img class="loading-img" src="./loading.gif" alt="">
    <p class="loading-desc">{{desc}}</p>
  </div>
</template>

<script>
export default {
  props: {
    desc: {
      type: String,
      default: "正在加载中···"
    }
  }
}
</script>

<style scoped lang="stylus">
@import "~common/stylus/variable"

  .loading
    width: 100%
    text-align: center
    .loading-img
      width: 24px
    .loading-desc
      line-height: 20px
      font-size: $font-size-small
      color: $color-text-l
</style>
