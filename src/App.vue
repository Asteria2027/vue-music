<template>
  <div id="app">
    <MHeader></MHeader>
    <tab></tab>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <player></player>
  </div>
</template>

<script type="text/ecmascript-6">
  import MHeader from  './components/m-header/m-header.vue';
  import tab from './components/tab/tab.vue';
  import player from './components/player/player.vue';

export default {
 components:{
   MHeader,
   tab,
   player
 }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
 @import "./common/stylus/variable.styl";

  #app
    color: $color-theme
</style>
