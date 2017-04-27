<template>
  <div id="app">
    <v-header></v-header>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <div class="tab">
      <div class="tab-item">
        <router-link to="/movie">
          <i class="icon iconfont icon-dy-light"></i>
          <h3>热映</h3>
        </router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seek">
          <i class="icon iconfont icon-yanjing1"></i>
          <h3>找片</h3>
        </router-link>
      </div>
      <div class="tab-item">
        <router-link to="/user">
          <i class="icon iconfont icon-ren"></i>
          <h3>我的</h3>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  import vHeader from '@/components/headerComponent/header';
  export default {
    name: 'app',
    components: {
      vHeader
    }
  };

</script>

<style lang="stylus" rel="stylesheet/stylus" scoped> 
  .tab
    display: flex
    position: fixed
    bottom: 0
    width: 100%
    height: 60px
    line-height: 26px
    border-top: 1px solid #b2b2b2
    background-color: #f7f7f7
    .tab-item
      flex:1
      text-align: center
      margin-top: 5px
      & > a
        display: block
        h3
          font-size: 12px
        &.active
          color: #000
    .icon
      font-size: 24px
</style>
