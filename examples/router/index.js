import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index'
import doc from '@/pages/doc'

Vue.use(Router)

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
      children: [
        {
          path: 'button',
          name: 'button',
          component: r => require.ensure([], () => r(require('../docs/button.md')))
        }
      ]
    },
    {
      path: '/test',
      name: 'test',
      component: r => require.ensure([], () => r(require('../docs/test.md')))
    }
  ]
})
