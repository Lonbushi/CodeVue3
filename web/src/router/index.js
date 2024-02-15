import { createRouter, createWebHistory } from 'vue-router'
import Home from '../view/Home.vue'
import News from '../view/News.vue'
import Product from '../view/Product.vue'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
const routes = [
    {
        path:'/',
        name:'home',
        component:Home
    },
    {
        path:'/news',
        name:'news',
        component:News
    },
    {
        path:'/product',
        name:'product',
        component:Product
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
  })


  router.beforeEach((to,from,next)=>{
    NProgress.start();
    next()
  })
  router.afterEach((to,from,next)=>{
    NProgress.done();
  })

export default router