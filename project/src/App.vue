<template>
  <div id="app">
    <m-header></m-header>
  </div>
</template>

<script>
import MHeader from "components/MHeader/MHeader";
export default {
  components: {
    MHeader
  }
};
</script>

<style scoped lang="stylus">
@import "~common/stylus/variable.styl";
#app
  color: $color-theme
</style>
