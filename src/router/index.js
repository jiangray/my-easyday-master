import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);
// 导入组件
import hotMovie from '../components/hotMovie/hotMovie.vue';
import seekMovie from '../components/seekMovie/seekMovie.vue';
import user from '../components/user/user.vue';
import inTheatersPage from '@/components/inTheatersPage/inTheatersPage.vue';
import comingSoonPage from '@/components/comingSoonPage/comingSoonPage.vue';
import moviePage from '@/components/moviePage/moviePage.vue';
import tvPlayPage from '@/components/tvPlayPage/tvPlayPage.vue';

let routes = [
  { path: '/', redirect: '/hotMovie/inTheatersPage' },
  {
    path: '/hotMovie',
    name: 'movies',
    component: hotMovie,
    children: [
      { path: '/hotMovie/inTheatersPage', component: inTheatersPage },
      { path: '/hotMovie/comingSoonPage', component: comingSoonPage }
    ]
  },
  {
    path: '/seekMovie',
    name: 'seek',
    component: seekMovie,
    children: [
      { path: '/seekMovie/moviePage', component: moviePage },
      { path: '/seekMovie/tvPlayPage', component: tvPlayPage }
    ]
  },
  { path: '/user', name: 'user', component: user }
];

export default new Router({
  routes
});

