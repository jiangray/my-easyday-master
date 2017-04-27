<template>
  <div ref="movies" class="movies">
  <div class="movie" v-if="theaters.subjects">
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
      <div :class="{onActive: isOnActiveTheaters}" class="tab-item" @click="switchTabs">
        正在热映
      </div>
      <div class="tab-item" :class="{onActive: isOnActiveComing}" @click="switchTabs">
        即将上映
      </div>
    </div>
    <inTheaters v-show="isOnActiveTheaters"></inTheaters>
    <comingSoon v-show="isOnActiveComing"></comingSoon>
  </div>
  </div>
</template>

<script>
  import inTheaters from '@/components/inTheaters/inTheaters.vue';
  import comingSoon from '@/components/comingSoon/comingSoon.vue';
  import BScroll from 'better-scroll';
  export default {
    name: 'movies',
    data() {
      return {
        isOnActiveTheaters: true,
        isOnActiveComing: false,
        theaters: {}
      };
    },
    methods: {
      switchTabs() {
        this.isOnActiveTheaters = !this.isOnActiveTheaters;
        this.isOnActiveComing = !this.isOnActiveComing;
      },
      _listScroll() {
        this.moviesScroll = new BScroll(this.$refs.movies, {
          click: true
        });
      }
    },
    created () {
      this.axios.get('/api/movie/in_theaters' + '?start=0&count=3').then((res) => {
        this.theaters = res.data;
        // 解决数据异步更新时，数据未完全加载完全，bscroll无法获取目标内容高度，导致无法滚动的现象
        this.$nextTick(() => {
          // this._listScroll();
        });
      });
    },
    components: {
      inTheaters,
      comingSoon
    }
  };

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus" scoped> 
  .movies
    width: 100%
    position: fixed
    top: 40px
    bottom: 6px
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
      .onActive
        color: #000
        border-bottom: 2px solid #000
</style>