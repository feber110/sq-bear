import Vue from 'vue'
import Router from 'vue-router'
import loginComponent from '@/components/loginComponent'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'loginComponent',
      component: loginComponent
    }
  ]
})
