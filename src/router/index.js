import Vue from 'vue'
import Router from 'vue-router'
import loginComponent from '@/components/loginComponent'
import indexComponent from '@/components/indexComponent'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'loginComponent',
      component: loginComponent
    },
    {
      path: '/index',
      name: 'indexComponent',
      component: indexComponent
    }
  ]
})
