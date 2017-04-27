<template>
  <div id="app">
    <v-header></v-header>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <div class="tab">
      <div class="tab-item" :class="{active: isActive}" @click="checkActive">
        <router-link to="/movie/theater">
          <i class="icon iconfont icon-dy-light"></i>
          <h3>热映</h3>
        </router-link>
      </div>
      <div class="tab-item" :class="{active: isOn}" @click="checkOn">
        <router-link to="/seek">
          <i class="icon iconfont icon-yanjing1"></i>
          <h3>找片</h3>
        </router-link>
      </div>
      <div class="tab-item" :class="{active: isOnActive}" @click="checkIsOnActive">
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
    data () {
      return {
        isActive: true,
        isOn: false,
        isOnActive: false
      };
    },
    methods: {
      checkActive() {
        this.isActive = true;
        this.isOn = false;
        this.isOnActive = false;
      },
      checkOn() {
        this.isActive = false;
        this.isOn = true;
        this.isOnActive = false;
      },
      checkIsOnActive() {
        this.isActive = false;
        this.isOn = false;
        this.isOnActive = true;
      }
    },
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
      & a
        font-size: 14px
    .active
      & a
        color: #000
        font-size: 14px
    .icon
      font-size: 24px
</style>
