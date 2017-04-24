import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);
// 导入组件
import movie from '../components/movie/movie.vue';
import seek from '../components/seekMovie/seekMovie.vue';
import user from '../components/user/user.vue';
let routes = [
  { path: '/', redirect: '/movie' },
  {path: '/movie', name: 'movie', component: movie},
  { path: '/seek', name: 'seek', component: seek },
  { path: '/user', name: 'user', component: user }
];

export default new Router({
  linkActiveClass: 'active',
  routes
});

