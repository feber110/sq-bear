import Vue from 'vue'
import Router from 'vue-router'
import VueCookie from 'vue-cookie'
import loginComponent from '@/components/loginComponent'
import indexComponent from '@/components/indexComponent'
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
      component: indexComponent
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