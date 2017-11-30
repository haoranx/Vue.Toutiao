import Vue from 'vue'
import Router from 'vue-router'
import recommend from '@/components/recommend'
import videos from '@/components/videos'
import hot from '@/components/hot'
import society from '@/components/society'
import cars from '@/components/cars'
import detail from '@/components/detail'
import sports from '@/components/sports'



Vue.use(Router)

const routes ={
  routes: [
    {
      path: '/recommend',
      name: 'recommend',
      component: recommend
    },{
      path: '/videos',
      name: 'videos',
      component: videos
    },{
      path: '/hot',
      name: 'hot',
      component: hot
    },{
      path: '/society',
      name: 'society',
      component: society
    },{
      path: '/cars',
      name: 'cars',
      component: cars
    },{
      path: '/detail/:id',
      name: 'detail',
      component: detail
    },{
      path: '/sports',
      name: 'sports',
      component: sports
    },{
      path: '*',
      redirect: '/recommend'
    }
  ]
}

const router = new Router(routes)


// router.beforeEach((to, from, next)=>{
//     if(to.path == '/collect'){
//         console.log(1);
//         next()
//     }else{
//         next()
//     }
// })


export default  router
