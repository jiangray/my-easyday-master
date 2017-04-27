<template>
  <div ref="theatersWrapper" class="theaters-wrapper" id="theatersWrapper">
    <ul class="theaters" id="theater">
      <li class="theaters-item" v-if="theaters.subjects" v-for="(item,index) in theaters.subjects">
        <div class="img">
          <img :src="item.images.medium" alt="">
        </div>
        <div class="content">
          <h2 class="title">{{item.title}}</h2>
          <div class="star-wrapper">
            <star :size="24" :score="item.rating.average"></star>
            <span v-show="item.rating.average > 0" class="score">{{item.rating.average}}</span>
            <span v-show="item.rating.average == 0" class="averge">评价人数不足</span>
          </div>
          <p class="director">导演：{{item.directors[0].name}}</p>
          <p class="casts">主演：<span v-for="(casts,index) in item.casts">{{casts.name}}/</span></p>
          <b class="collect-count">{{item.collect_count}}人看过</b>
        </div>
      </li>
    </ul>
    <div class="reload-wrapper">
      <spinner></spinner>
    </div>
    <div class="loadMore-wrapper">
      <spinner v-if="theaters.subjects.length > 0"></spinner>
    </div>
  </div>
</template>

<script>
// import {Movie} from '@/common/js/movie.js';
import BScroll from 'better-scroll';
import star from '@/components/star/star';
import spinner from '@/components/spinner/spinner';
export default {
  name: 'theaters-wrapper',
  data () {
    return {
      theaters: {
        subjects: []
      },
      datacount: 3,
      isScroll: false
    };
  },
  methods: {
    _initScroll() {
      let _this = this;
      let theatersScroll = new BScroll(this.$refs.theatersWrapper, {
        click: true,
        probeType: 1
      });
      theatersScroll.on('touchend', function(pos) {
        if (pos.y > 50) {
          _this._reLoadData();
          setTimeout(function() {
            theatersScroll.refresh();
          }, 1000);
        }
      });
      theatersScroll.on('touchend', (pos) => {
        let elHeight = document.getElementById('theatersWrapper').offsetHeight;
        let scrollHeight = document.getElementById('theater').scrollHeight;
        if (pos.y + (-elHeight) < (-scrollHeight - 50)) {
           _this._onLoadNewData();
          // vue数据渲染到页面有延时，所以refresh在延时后调用
          setTimeout(function() {
            theatersScroll.refresh();
          }, 1000);
        }
      });
    },
    _reLoadData() {
      this.axios.get('/api/movie/in_theaters' + '?start=0&count=3').then((res) => {
        this.theaters.subjects = res.data.subjects;
      });
    },
    _onLoadNewData() {
      this.isScroll = true;
      this.axios.get('/api/movie/in_theaters' + '?start=' + this.datacount + '&count=3').then((res) => {
        this.theaters.subjects = this.theaters.subjects.concat(res.data.subjects);
      });
      this.datacount += 3;
      this.isScroll = false;
    }
  },
  created () {
    this.axios.get('/api/movie/in_theaters' + '?start=0&count=3').then((res) => {
        this.theaters.subjects = res.data.subjects;
      // 解决数据异步更新时，数据未完全加载完全，bscroll无法获取目标内容高度，导致无法滚动的现象
      this.$nextTick(() => {
        this._initScroll();
      });
    });
  },
  components: {
    star,
    spinner
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .theaters-wrapper
    width: 100%
    position: fixed
    top: 200px
    bottom: 60px
    overflow: hidden
    .theaters
      position: relative
      z-index: 10
      background: #fff
    .reload-wrapper
      position: absolute
      left: 0
      top: 0
      width: 100%
    .loadMore-wrapper
      position: absolute
      left: 0
      bottom: 0
      width: 100%
    .theaters-item
      display: flex
      padding: 10px
      .content
        flex:1
        width: 100%
        margin-left: 10px
        line-height: 26px
        color: #494949
        .title
          font-size: 18px
          margin-bottom: 5px
          font-weight: 700
        .star-wrapper
          font-size: 0
          .star
            display: inline-block
            margin-right: 6px
          .score
            font-size: 12px
          .averge
            font-size: 12px  
        .director
          font-size: 12px
        .casts
          width: 200px
          overflow: hidden
          /*text-overflow: ellipsis
          word-break: keep-all
          white-space: nowrap;*/
          font-size: 12px 
        .collect-count
          font-size: 12px
          color: #eda44b
</style>
