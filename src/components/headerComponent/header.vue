<template>
  <div class="header">
    <div class="address"><span>广州</span><i class="icon iconfont icon-unfold"></i></div>
    <div class="search-wraper">
      <i class="icon iconfont icon-search"></i>
      <input class="search" type="text" placeholder="电影/电视剧/影人">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'header'
  };

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus" scoped> 
  .header
    width: 100%
    height: 40px
    display: flex
    .address
      flex: 0.5
      line-height: 40px
      text-align: center
      color: #494949
      font-size: 14px
      .icon
        vertical-align: baseline
        margin-left: 6px
    .search-wraper
      flex: 1.5
      margin-right: 10px
      margin-top: 5px
      border-radius: 8px
      padding-left: 5px
      background-color: #f5f5f5
      height: 30px
      line-height: 30px
      color: #9b9b9b
      font-size: 14px
      .search
        height: 100%
        background-color: #f5f5f5
        outline: none
      .icon
        font-size: 16px
        color: #9b9b9b
        font-weight: 700
        vertical-align: top
</style>
