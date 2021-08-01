<template>
  <div id="app">
    <mainHeader />  
    <router-view class="page-view" />
  </div>
</template>

<script>
import mainHeader from './components/header.vue'
export default {
  name: 'App',
  components:{
    mainHeader
  }
}
</script>

<style lang="less" type="text/less">
  @import "./assets/less/index";
  
  .page-view{
    min-height: calc(100vh - 60px);
  }
</style>
