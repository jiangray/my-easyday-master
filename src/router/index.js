import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);
// 导入组件
import movie from '../components/movie/movie.vue';
import seek from '../components/seekMovie/seekMovie.vue';
import user from '../components/user/user.vue';
import theater from '@/components/inTheaters/inTheaters.vue';
import coming from '@/components/comingSoon/comingSoon.vue';
let routes = [
  { path: '/', redirect: '/movie/theater' },
  {
    path: '/movie',
    name: 'movie',
    component: movie,
    children: [
      { path: '/movie/theater', component: theater },
      { path: '/movie/comingSoon', component: coming }
    ]
  },
  { path: '/seek', name: 'seek', component: seek },
  { path: '/user', name: 'user', component: user }
];

export default new Router({
  routes
});

