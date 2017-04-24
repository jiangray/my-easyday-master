<template>
  <div class="movie">
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
</template>

<script>
  import inTheaters from '@/components/inTheaters/inTheaters.vue';
  import comingSoon from '@/components/comingSoon/comingSoon.vue';
  export default {
    name: 'movie',
    data() {
      return {
        isOnActiveTheaters: true,
        isOnActiveComing: false
      };
    },
    methods: {
      switchTabs() {
        this.isOnActiveTheaters = !this.isOnActiveTheaters;
        this.isOnActiveComing = !this.isOnActiveComing;
      }
    },
    components: {
      inTheaters,
      comingSoon
    }
  };

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus" scoped> 
  .movie
    position: absolute
    top: 60px
    bottom: 60px
    width: 100%
    overflow: hidden
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