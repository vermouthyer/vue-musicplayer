<template>
  <div class="recommend">
    <div class="recommend-content">
      <div v-if="recommends.length" class="slider-wrapper">
        <slider>
          <div v-for="item in recommends" :key="item.id">
            <a :href="item.url">
              <img :src="item.image" alt="">
            </a>
          </div>
        </slider>
      </div>
      <div class="recommend-list">
        <h1 class="list-title">热门歌单推荐</h1>
        <ul></ul>
      </div>
    </div>
  </div>
</template>

<script>
import Slider from 'base/Slider/Slider';
import {getRecommend} from 'api/recommend';
import {ERR_OK} from 'api/config';

export default {
  data () {
    return {
      recommends: []
    }
  },
  created () {
    this._getRecommend();
  },
  methods: {
    _getRecommend () {
      getRecommend().then((res) => {
        if (res.message === ERR_OK) {
          this.recommends = res.bigPics;
        }
      })
      .catch(err => console.log(err))
    }
  },
  components: {
    Slider
  }
};
</script>

<style scoped lang="stylus">
@import "~common/stylus/variable"

  .recommend
    positon: fixed
    top: 88px
    bottom: 0
    width: 100%
    background-color red
    .recommend-content
      height: 100%
      overflow: hidden
      .slider-wrapper
        position: relative
        width: 100%
        overflow: hidden
      .recommend-list
        height: 65px
        line-height: 65px
        text-align: center
        font-size: $font-size-medium  
</style>
