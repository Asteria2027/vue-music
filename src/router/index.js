import Vue from 'vue';
import Router from 'vue-router';
import Recommend from '../components/recommend/recommend.vue';
import Singer from '../components/singer/singer.vue';
import Rank from '../components/rank/rank.vue';
import Search from '../components/search/search.vue';
import SingerDetatil from '../components/singer-detail/singer-detail.vue';


Vue.use(Router);

export default new Router({
  routes:[
    {
      path:'/',
      component:Recommend
    },
    {
      path:'/recommend',
      component:Recommend
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
      component:Rank
    },
    {
      path:'/search',
      component:Search
    }
  ]
})
