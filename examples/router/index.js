import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index'
import doc from '@/pages/doc'
import docConf from '../doc.nav.conf.json'

Vue.use(Router)

let docRoutes = []

docConf.forEach((doc) => {
  let {type} = doc
  
  if ( type === "md" ) {
    let { path, name } = doc
    console.log(doc,type)
    docRoutes.push({
      path,
      name,
      component: r => require.ensure([], () => r(require(`../docs/${name}.md`)))
    })
  }
})

console.log(docRoutes)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: index
    },
    {
      path: '/doc',
      name: 'doc',
      component: doc,
      children: docRoutes
    }
  ]
})
