<template>
  <div class="seek">
    <div class="tabs">
      <div class="tab-item" :class="{active: isOnTab}" @click="checkTab">
        <router-link to="/seekMovie/moviePage">电影</router-link>
      </div>
      <div class="tab-item" :class="{active: !isOnTab}" @click="checkTab">
        <router-link to="/seekMovie/tvPlayPage">电视剧</router-link>
      </div>
    </div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
  export default {
    name: 'seek',
    data() {
      return {
        isOnTab: true
      };
    },
    methods: {
      checkTab() {
        this.isOnTab = !this.isOnTab;
      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus" scoped> 
  .seek
    width: 100%
    position: fixed
    top: 40px
    bottom: 60px
    overflow: hidden
    .tabs
      display: flex
      width: 100%
      height: 39px
      border-bottom: 1px solid #ccc
      .tab-item
        flex: 1
        height: 38px
        line-height: 38px
        text-align: center
        color: #9b9b9b
        & a
          display: block
      .active
        border-bottom: 2px solid #000
        & a
          color: #000
          font-weight: 700
          font-size: 16px
</style>