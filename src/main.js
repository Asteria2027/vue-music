import 'babel-polyfill';

import Vue from 'vue';
import App from './App.vue';
import fastclick from 'fastclick';
import VueLazyLoad from 'vue-lazyload';

import router from './router';

import './common/stylus/index.styl';

fastclick.attach(document.body);

Vue.use(VueLazyLoad,{
  loading:require('./common/image/default.png')
});

new Vue({
  el:'#app',
  router,
  render:h=>h(App)
});
