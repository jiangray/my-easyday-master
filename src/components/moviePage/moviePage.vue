<template>
  <div class="movie-page" ref="moviePage">
    <div class="movie-wrapper">
      <split></split>
      <div class="pics">
        <h3 class="title">精选榜单</h3>
        <div class="banner-wrapper" ref="bannerWrapper">
          <ul class="banner-content" ref="pickList">
            <li class="img">
              <img src="./banner-01.png" alt="" width="160">
            </li>
            <li class="img">
              <img src="./banner-02.png" alt="" width="160">
            </li>
            <li class="img">
              <img src="./banner-03.png" alt="" width="160">
            </li>
            <li class="img">
              <img src="./banner-04.png" alt="" width="160">
            </li>
          </ul>
        </div>
      </div>
      <split></split>
      <div class="ads-banner">
        <img src="./ads-banner-01.png" alt="">
        <h4>CULT片迷影症候群者————邪典神片全搜罗</h4>
      </div>
      <split></split>
      <div class="ads-banner">
        <img src="./ads-banner-02.png" alt="">
        <h4>CULT片迷影症候群者————邪典神片全搜罗</h4>
      </div>
      <split></split>
      <div class="interest-movie">
        <h3 class="title">你可能感兴趣</h3>
        <ul class="interest-wrapper clearfix">
          <li v-for="item in interest.subjects" class="interest-item">
            <img :src="item.images.medium" alt="">
            <h5 class="name">{{item.title}}</h5>
            <star :size="24" :score="item.rating.average"></star>
            <span class="score">{{item.rating.average}}</span>
          </li>
        </ul>
        <p class="moreMovies">查看更多&nbsp;&gt;</p>
      </div>
      <split></split>
      <div class="comment-wrapper">
        <div class="comment-content">
          <div class="comment-container">
            <h3 class="comment-title">{{comments.title}}</h3>
            <p class="comment-text">{{comments.text}}</p>
            <p class="commenter">{{comments.name}}</p>
          </div>
          <div class="comment-img">
            <img :src="comments.img">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll';
import split from '@/components/split/split.vue';
import star from '@/components/star/star';
export default {
  name: 'movie-page',
  data () {
    return {
      interest: {
        subjects: []
      },
      comments: {
        title: '英雄，愿你有一份不悔的青春',
        text: '很久很久以前，艾泽拉斯大陆流传着一个传说：击败风王子桑德兰后，就能得到一把勇士们梦寐以求的佩剑——雷霆之怒·逐风者的祝福之剑。',
        name: 'jiangray',
        img: 'https://img1.doubanio.com/view/movie_poster_cover/lpst/public/p2345947329.webp'
      }
    };
  },
  methods: {
    _initPics() {
      let picWidth = 160;
      let margin = 6;
      let width = (picWidth + margin) * 4 - margin;
      this.$refs.pickList.style.width = width + 'px';
      this.picScroll = new BScroll(this.$refs.bannerWrapper, {
        scrollX: true
      });
    },
    _initmoviePage() {
      this.moviePageScroll = new BScroll(this.$refs.moviePage);
    }
  },
  mounted () {
    this._initPics();
    this._initmoviePage();
  },
  created () {
    this.axios.get('/api/movie/top250' + '?start=0&count=6').then((res) => {
      this.interest.subjects = res.data.subjects;
      this.$nextTick(() => {
        this._initmoviePage();
      });
    });
  },
  components: {
    split,
    star
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus" scoped> 
  .movie-page
    position: fixed
    bottom: 61px
    top: 80px
    width: 100%
    overflow: hidden
    .movie-wrapper
      width: 100%
    .title
      height: 30px
      font-weight: 700
    .pics
      padding: 18px 6px
      .banner-wrapper
        width: 100%
        overflow: hidden
        white-space: nowrap
        .banner-content
          font-size: 0
          .img
            display: inline-block
            margin-right: 6px
            width: 160px
            height: 120px
            &:last-child
              margin: 0
    .ads-banner
      width: 100%
      h4
        font-size: 14px
        margin: 10px 0 10px 15px
      img
        width: 100%
    .interest-movie
      padding: 18px 6px
      .interest-wrapper
        wdith: 100%
        margin: 0 auto
        .interest-item
          float: left
          width: 31%
          margin-left: 2%
          margin-bottom: 15px
          .name
            font-size: 12px
            font-weight: normal
            margin-top:3px
            margin-bottom: 3px
          .star
            display: inline-block
          img
            width:100%
            height:140px
          .score
            font-size: 12px
      .moreMovies
        margin-bottom: 20px
        font-size: 14px
        color: #42bd56
        text-align: center
    .comment-wrapper
      width: 100%
      .comment-content
        font-size: 12px
        word-break: break-all
        display: flex
        padding: 10px
        .comment-container
          flex: 1
          margin-right: 6px
          .comment-title
            font-size: 16px
            margin-bottom: 6px
          .comment-text
            line-height: 16px
            height: 100px
            overflow: hidden
            text-overflow : ellipsis
        .comment-img
          width:120px
          height: 160px
          img
            width: 100%
            height: 100%
</style>
