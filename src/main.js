import 'babel-polyfill';

import Vue from 'vue';
import App from './App.vue';
import fastclick from 'fastclick';
import VueLazyLoad from 'vue-lazyload';

import router from './router';
import store from './store'

import './common/stylus/index.styl';

import vConsole from 'vconsole'

console.log('test')

fastclick.attach(document.body);

Vue.use(VueLazyLoad,{
  loading:require('./common/image/default.png')
});

new Vue({
  el:'#app',
  router,
  store,
  render:h=>h(App)
});
