<template>
  <header class="page-header">
    <router-link to="/" class="page-header-link">
      <img class="page-header-logo" src="../assets/logo.png" alt="" />
      <span class="page-header-text">GR-UI</span>
    </router-link>
    <ul class="page-header-nav">
      <li class="page-header-nav-item">
        <router-link to="/doc"> 文档 </router-link>
      </li>
    </ul>
  </header>
</template>

<script>
export default {};
</script>

<style lang="less" type="text/less" >
@import "../assets/less/var";
.page-header {
  height: 60px;
  padding: 0 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  &-link {
    display: flex;
    align-items: center;
  }
  &-logo {
    width: 60px;
  }
  &-text {
    font-size: 26px;
    color: @color-primary;
  }
  &-nav {
    list-style: none;

    &-item {
      a {
        color: rgba(@color-primary, 0.5);
				font-size: 18px;
				&:hover,&.router-link-active{
					color: @color-primary;
				}
      }
    }
  }
}
</style>