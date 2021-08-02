<template>
  <div class="side-nav">
    <template v-for="(item, i) in docConf">
      <div class="side-nav-item" v-if="item.type === 'md'" :key="i">
        <router-link :to="'/doc/' + item.path">{{ item.desc }}</router-link>
      </div>
      <div
        class="side-nav-group"
        v-else-if="item.type === 'nav-group'"
        :key="i"
      >
        {{ item.desc }}
      </div>
      <div
        class="side-nav-group-title"
        v-else-if="item.type === 'nav-group-title'"
        :key="i"
      >
        {{ item.desc }}
      </div>
    </template>
  </div>
</template>

<script>
import docConf from "../doc.nav.conf.json";
console.log(docConf);
export default {
  data() {
    return {
      docConf,
    };
  },
};
</script>

<style lang="less" type="text/less" >
.side-nav-item {
  height: 40px;
  a {
		display: block;
    color: #444;
		font-size: 14px;
		line-height: 40px;
		&:hover{
			color: #3FAAF5;
		}
  }
	a.router-link-active{
		color: #3FAAF5;
	}
}
.side-nav-group{
	height: 40px;
	font-size: 16px;
	color: #333;
	line-height: 40px;
	font-weight: 700;
	margin-top: 15px;
}
.side-nav-group-title{
	height: 26px;
	font-size: 12px;
	line-height: 26px;
	margin-top: 15px;
	color: #999;
}
</style>