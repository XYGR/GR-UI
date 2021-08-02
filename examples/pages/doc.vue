<template>
  <div class="page-doc">
    <side-nav></side-nav>
    <router-view class="page-doc-view" />
  </div>
</template>

<script>
  import sideNav from "../components/side-nav.vue";
export default {
  components: {
    sideNav,
  }
};
</script>

<style lang="less" type="text/less" >
.page-doc {
  display: flex;
}
.side-nav{
  width: 200px;
  padding-left: 40px;
  padding-top: 20px;
}
.page-doc-view{
  flex: 1;
  padding: 0 20px;
}
.side-nav,.page-doc-view {
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