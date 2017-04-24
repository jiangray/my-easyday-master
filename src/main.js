// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router/index';
import axios from 'axios';
import Mint from 'mint-ui';
import '@/common/stylus/index.styl';

Vue.config.productionTip = false;
Vue.use(Mint);

// 将axios改写为Vue的原型链，否则无法在其他组件中使用
Vue.prototype.axios = axios;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});

// router.push('/movie');