<template>
  <div class="recommend">
    <scroll ref="scroll" class="recommend-content" :data="playlist">
      <div>
        <div v-if="recommends.length" class="slider-wrapper">
          <slider>
            <div v-for="item in recommends" :key="item.id">
              <a :href="item.url">
                <img @load="loadImg" :src="item.image" alt="">
              </a>
            </div>
          </slider>
        </div>
        <div class="recommend-list">
          <h1 class="list-title">热门歌单推荐</h1>
          <ul>
            <li class="item" v-for="item in playlist" :key="item.id">
              <div class="item-pic-wrapper">
                <img width="60" height="60" class="item-pic" v-lazy="item.image" alt="">
              </div>
              <div class="item-text">
                <h2 class="item-title" v-html="item.title"></h2>
                <p class="item-desc" v-html="item.description"></p>
              </div>
            </li>
          </ul>
        </div>
        <div class="loading-container" v-show="!playlist.length">
          <loading></loading>
        </div>
      </div>  
    </scroll>
  </div>
</template>

<script>
import axios from "axios";
import Slider from 'base/Slider/Slider';
import Scroll from 'base/Scroll/Scroll';
import Loading from "base/Loading/Loading";
import {getRecommend, getDiscList} from 'api/recommend';
import {ERR_OK} from 'api/config';

export default {
  data () {
    return {
      recommends: [],
      playlist:[]
    }
  },
  created () {
    // this._getRecommend();
    // this._getDiscList();
  },
  mounted () {
    this.getRecommendSlider();
    setTimeout(() => {
      this.getRecommendPlaylist();
    }, 2000)
  },
  methods: {
    getRecommendSlider () {
      axios.get('/recommendSlider.json')
        .then(this.getRecommendSliderSucc)
          .catch(e => console.log(e))
    },
    getRecommendSliderSucc (res) {
      if (res.data.message === ERR_OK) {
        this.recommends = res.data.bigPics
      }
      console.log(res);
    },
    getRecommendPlaylist () {
      axios.get('/recommendPlaylist.json')
        .then(this.getRecommendPlaylistSucc)
          .catch(e => console.log(e))
    },
    getRecommendPlaylistSucc (res) {
      if (res.data.message === ERR_OK) {
        this.playlist = res.data.result
      }
      console.log(res);
    },
    _getRecommend () {
      getRecommend().then((res) => {
        if (res.message === ERR_OK) {
          this.recommends = res.bigPics;
        }
      })
      .catch(err => console.log(err))
    },
    _getDiscList() {
      getDiscList().then((res) => {
        if(res.message === ERR_OK) {
          this.playlist = res.playlists
        }
        console.log(this.playlist);
      }).catch( err => console.log(err))
    },
    loadImg () {
      if(!this.checkLoaded){
        this.$refs.scroll.refresh()
        this.checkLoaded = true
      }
    }
  },
  components: {
    Slider,
    Scroll,
    Loading
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
    .recommend-content
      height: 90vh
      overflow: scroll
      .slider-wrapper
        position: relative
        width: 100%
        overflow: hidden
      .recommend-list
        .list-title
          height: 65px
          line-height: 65px
          text-align: center
          font-size: $font-size-medium
          color: $color-theme
        .item
          display: flex
          // justify-content: flex-start
          box-sizing: border-box
          padding: 0 20px 20px 20px
          .item-pic-wrapper
            flex: 0 0 60px
            width: 60px
            padding-right: 20px
          .item-text
            flex: 1
            height: 60px
            line-height: 20px
            font-size: $font-size-medium
            overflow: hidden
            position: relative
            display: flex
            flex-direction: column
            justify-content: center
            .item-title
              color: $color-text
              margin-bottom: 10px
              white-space: nowrap
            .item-desc
              color: $color-text-d
              line-height: 15px
              text-overflow: ellipsis
              overflow: hidden
              white-space: nowrap
      .loading-container
        width: 100%
        position: absolute
        top: 50%
        transform: translateY(-50%)
</style>
