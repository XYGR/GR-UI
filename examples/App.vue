<template>
  <div id="app">
    <mainHeader />
    <router-view class="page-view" />
  </div>
</template>

<script>
import mainHeader from "./components/header.vue";
export default {
  name: "App",
  components: {
    mainHeader,
  },
};
</script>

<style lang="less" type="text/less">
@import "./assets/less/index";
#app {
  height: 100vh;
  display: flex;
  flex-direction: column;
}
.page-view {
  flex: 1;
  overflow: auto;
  &::-webkit-scrollbar {
    /*滚动条整体样式*/
    width: 6px; /*高宽分别对应横竖滚动条的尺寸*/
    height: 1px;
  }
  &::-webkit-scrollbar-thumb {
    /*滚动条里面小方块*/
    border-radius: 6px;
    background-color: skyblue;
    background-image: -webkit-linear-gradient(
      45deg,
      rgba(255, 255, 255, 0.2) 25%,
      transparent 25%,
      transparent 50%,
      rgba(255, 255, 255, 0.2) 50%,
      rgba(255, 255, 255, 0.2) 75%,
      transparent 75%,
      transparent
    );
  }
  &::-webkit-scrollbar-track {
    /*滚动条里面轨道*/
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    background: #ededed;
    border-radius: 10px;
  }
}
</style>
