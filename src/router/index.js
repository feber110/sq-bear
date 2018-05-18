import Vue from 'vue'
import Router from 'vue-router'
import VueCookie from 'vue-cookie'
import loginComponent from '@/components/loginComponent'
import indexComponent from '@/components/indexComponent'
import incomeComponent from '@/components/incomeComponent'
import seedOrder from '@/components/seedOrder'
import cityOrder from '@/components/cityOrder'
import specialOrder from '@/components/specialOrder'
import customerOrder from '@/components/customerOrder'
import cityList from '@/components/cityList'
import customerList from '@/components/customerList'
import specialList from '@/components/specialList'
import todoList from '@/components/todoList'
import heroList from '@/components/heroList'
import approvalDetail from '@/components/approvalDetail'

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
        name: 'seedOrder',
        component: seedOrder,
      },
      {
        path: '/cityorder',
        name: 'cityOrder',
        component: cityOrder,
      },
      {
        path: '/specialorder',
        name: 'specialOrder',
        component: specialOrder,
      },
      {
        path: '/customerorder',
        name: 'customerOrder',
        component: customerOrder,
      },
      {
        path: '/citylist',
        name: 'cityList',
        component: cityList,
      },
      {
        path: '/customerlist',
        name: 'customerList',
        component: customerList,
      },
      {
        path: '/speciallist',
        name: 'specialList',
        component: specialList,
      }
      ,
      {
        path: '/todolist',
        name: 'todoList',
        component: todoList,
      },
      {
        path: '/herolist',
        name: 'heroList',
        component: heroList,
      },
      {
        path:'/approvaldetail',
        name:'approvalDetail',
        component:approvalDetail,
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
