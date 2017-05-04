<template>
  <div ref="movies" class="movies clearfix">
    <div class="banner-wraper">
      <mt-swipe :auto="4000">
        <mt-swipe-item class="banner-item">
          <img src="./banner-01.png" alt="">
        </mt-swipe-item>
        <mt-swipe-item class="banner-item">
          <img src="./banner-02.png" alt="">        
        </mt-swipe-item>
        <mt-swipe-item class="banner-item">
          <img src="./banner-03.png" alt="">
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <div class="tabs">
      <div class="tab-item" id="theatersItem" :class="{onActive: isOnActive}" @click="switchTabs">
        <router-link to="/hotMovie/inTheatersPage">正在热映</router-link>
      </div>
      <div class="tab-item" id="comingItem" :class="{onActive: !isOnActive}" @click="switchTabs">
        <router-link to="/hotMovie/comingSoonPage">即将上映</router-link>
      </div>
    </div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
  import BScroll from 'better-scroll';
  export default {
    name: 'movies',
    data() {
      return {
        isOnActive: true
      };
    },
    methods: {
      switchTabs() {
        this.isOnActive = !this.isOnActive;
      }
    }
  };

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus" scoped> 
  .movies
    width: 100%
    position: fixed
    top: 40px
    bottom: 61px
    overflow: hidden
    .movie
      width: 100%
      height: 100%
    .banner-wraper
      width:100%
      height: 120px
      & img
        width:100%
        height: 100%
    .tabs
      display: flex
      width: 100%
      height: 40px
      border-bottom: 1px solid #ccc
      .tab-item
        flex: 1
        height: 38px
        line-height: 38px
        text-align: center
        color: #9b9b9b
        & a
          display: block
      .onActive
        border-bottom: 2px solid #000
        & a
          color: #000
          font-weight: 700
          font-size: 16px
</style>