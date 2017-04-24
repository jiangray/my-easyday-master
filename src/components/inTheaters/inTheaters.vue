<template>
  <div class="in-theaters">
    <ul class="theaters-wrapper">
      <li class="theaters-item">
        <div class="img" v-if="theaters.subjects">
          <img :src="theaters.subjects[0].images.medium" alt="">
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
// import {Movie} from '@/common/js/movie.js';
const ERR_OK = 0;
export default {
  name: 'in-theaters',
  data () {
    return {
      theaters: {}
    };
  },
  methods: {

  },
  created () {
    this.axios.get('/api/movie/in_theaters').then((res) => {
      // console.log(this.theaters);
      this.theaters = res.data;
    });
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped> 
  .in-theaters
    width: 100%
    height: 100%
</style>
