import Vue from 'vue';
import Router from 'vue-router';
//import Recommend from '../components/recommend/recommend.vue';
//import Singer from '../components/singer/singer.vue';
//import Rank from '../components/rank/rank.vue';
//import Search from '../components/search/search.vue';
//import SingerDetatil from '../components/singer-detail/singer-detail.vue';
//import Disc from '../components/disc/disc.vue';
//import TopList from '../components/top-list/top-list.vue';

Vue.use(Router);

const Recommend = resolve => require(['../components/recommend/recommend.vue'], resolve);
const Singer = resolve => require(['../components/singer/singer.vue'], resolve);
const Rank = resolve => require(['../components/rank/rank.vue'], resolve);
const Search = resolve => require(['../components/search/search.vue'], resolve);
const SingerDetatil = resolve => require(['../components/singer-detail/singer-detail.vue'], resolve);
const Disc = resolve => require(['../components/disc/disc.vue'], resolve);
const TopList = resolve => require(['../components/top-list/top-list.vue'], resolve);

//const Recommend = (resolve) => {
//  import('../components/recommend/recommend.vue').then((module) => {
//    resolve(module)
//  })
//}
//
//const Singer = (resolve) => {
//  import('../components/singer/singer.vue').then((module) => {
//    resolve(module)
//  })
//}
//
//const Rank = (resolve) => {
//  import('../components/rank/rank.vue').then((module) => {
//    resolve(module)
//  })
//}
//
//const Search = (resolve) => {
//  import('../components/search/search.vue').then((module) => {
//    resolve(module)
//  })
//}
//
//const SingerDetail = (resolve) => {
//  import('../components/singer-detail/singer-detail.vue').then((module) => {
//    resolve(module)
//  })
//}
//
//const Disc = (resolve) => {
//  import('../components/disc/disc.vue').then((module) => {
//    resolve(module)
//  })
//}
//
//const TopList = (resolve) => {
//  import('../components/top-list/top-list.vue').then((module) => {
//    resolve(module)
//  })
//}


export default new Router({
  routes:[
    {
      path:'/',
      component:Recommend
    },
    {
      path:'/recommend',
      component:Recommend,
      children:[
        {
          path:':id',
          component:Disc
        }
      ]
    },
    {
      path:'/singer',
      component:Singer,
      children:[
        {
          path:':id',
          component:SingerDetatil
        }
      ]
    },
    {
      path:'/rank',
      component:Rank,
      children:[
        {
          path:':id',
          component:TopList
        }
      ]
    },
    {
      path:'/search',
      component:Search,
      children:[
        {
          path:':id',
          component:SingerDetatil
        }
      ]
    }
  ]
})
