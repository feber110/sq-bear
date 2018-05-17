import Vue from 'vue'
import Router from 'vue-router'
import VueCookie from 'vue-cookie'
import loginComponent from '@/components/loginComponent'
import indexComponent from '@/components/indexComponent'
import incomeComponent from '@/components/incomeComponent'
import SeedOrder from '@/components/SeedOrder'
import CityOrder from '@/components/CityOrder'
import SpecialOrder from '@/components/SpecialOrder'
import CustomerOrder from '@/components/CustomerOrder'
import CityList from '@/components/CityList'
import CustomerList from '@/components/CustomerList'
import SpecialList from '@/components/SpecialList'
import TodoList from '@/components/TodoList'
import HeroList from '@/components/HeroList'
import ApprovalDetail from '@/components/ApprovalDetail'

    Vue.use(Router)
    Vue.use(VueCookie)

  const router = new Router({
    routes: [
      {
        path: '/',
        name: 'loginComponent',
        component: loginComponent
      },
      {
        path: '/index',
        name: 'indexComponent',
        component: indexComponent,
      },
      {
        path: '/test',
        name: 'indexComponent',
        component: indexComponent,
      },
      {
        path: '/income',
        name: 'incomeComponent',
        component: incomeComponent,
      },
      {
        path: '/seedorder',
        name: 'SeedOrder',
        component: SeedOrder,
      },
      {
        path: '/cityorder',
        name: 'CityOrder',
        component: CityOrder,
      },
      {
        path: '/specialorder',
        name: 'SpecialOrder',
        component: SpecialOrder,
      },
      {
        path: '/customerorder',
        name: 'CustomerOrder',
        component: CustomerOrder,
      },
      {
        path: '/citylist',
        name: 'CityList',
        component: CityList,
      },
      {
        path: '/customerlist',
        name: 'CustomerList',
        component: CustomerList,
      },
      {
        path: '/speciallist',
        name: 'SpecialList',
        component: SpecialList,
      }
      ,
      {
        path: '/todolist',
        name: 'TodoList',
        component: TodoList,
      },
      {
        path: '/herolist',
        name: 'HeroList',
        component: HeroList,
      },
      {
        path:'/approvaldetail',
        name:'ApprovalDetail',
        component:ApprovalDetail,
      }
  ],

})
router.beforeEach(function(to,from,next){
  // 验证登录
  // function getCookie(name) {
  //   var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
  //   if(arr=document.cookie.match(reg))
  //     return unescape(arr[2]);
  //   else
  //     return null;
  // }
  // const ACCOUNT = getCookie('account')
  // const PASSWORD = getCookie('password')
  if (true){
    next()
  }else{
  next()
}
})
export default router;
