<template>
  <div class="page-index">
    <div class="index-container">
      <img class="index-container-logo" src="../assets/logo.png" alt="" />
      <p class="index-container-desc">
        基于 Vue2 的轻量级、模块化前端 UI 组件库
      </p>
    </div>
    <div class="separate-panel">
      <div class="separate-panel-about">
        <router-link to="/doc" class="separate-panel-about-doc">开始使用</router-link
        >
        <a href="https://github.com/XYGR/GR-UI" target="_blank" class="separate-panel-about-github">GitHub</a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" type="text/less" >
.index-container {
  text-align: center;
  padding: 100px;
  &-logo {
    width: 360px;
  }
  &-desc {
    font-size: 32px;
    background-image: linear-gradient(180deg, #3faaf5, #13ce66);
    -webkit-background-clip: text;
    color: transparent;
    margin-top: 38px;
  }
}
.separate-panel {
  position: relative;
  &::after {
    content: "";
    display: block;
    position: absolute;
    top: -80px;
    width: 100%;
    height: 165px;
    background: #fff;
    -webkit-box-shadow: 0 -4px 30px 0 #dfe1e6;
    box-shadow: 0 -4px 30px 0 #dfe1e6;
    -webkit-transform: skewY(-3deg);
    transform: skewY(-3deg);
  }
  &-about {
    width: 100%;
    height: 165px;
    position: absolute;
    z-index: 9;
    background-color: #fff;
    text-align: center;
    a {
      display: inline-block;
      width: 190px;
      font-size: 18px;
      margin: 0 35px;
    }
    &-doc {
      color: #fff;
      background-image: -webkit-gradient(
        linear,
        left top,
        right top,
        from(#00aeff),
        to(#3369e7)
      );
      background-image: linear-gradient(90deg, #00aeff 0%, #3369e7 100%);
      -webkit-box-shadow: 0 2px 6px 0 rgb(51 105 231 / 40%);
      box-shadow: 0 2px 6px 0 rgb(51 105 231 / 40%);
      display: inline-block;
      height: 56px;
      line-height: 56px;
      border-radius: 28px;
      -webkit-transition: all 0.3s;
      transition: all 0.3s;
      cursor: pointer;
    }
    &-github{
      height: 54px;
      line-height: 54px;
      border: 1px solid #316DE9;
      border-radius: 26px;
      color: #316DE9
    }
  }
}
</style>