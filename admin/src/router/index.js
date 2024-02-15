import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import MainBox from '../views/MainBox.vue'
import Roterconfig from './config'
import store from '../store/index'
const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/mainbox',
    name: 'mainbox',
    component: MainBox
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})
//每次路由跳转之前
router.beforeEach((to, from, next) => {
  if (to.name === 'login') {
    next()
  } else {
    //如果授权（已经登陆过了）next()
    //未授权，重定向到login
    if (!localStorage.getItem('token')) {
      next({
        path: '/login'
      })
    } else {
      if (!store.state.isGetterRouter) {
        router.removeRoute('mainbox')

        ConfigRouter()
        next({
          path: to.fullPath
        })
      } else {
        next()
      }
    }
  }
})

const ConfigRouter = () => {
  
  if (!router.hasRoute('mainbox')) {
    router.addRoute({
      path: '/mainbox',
      name: 'mainbox',
      component: MainBox
    })
  }

  Roterconfig.forEach((item) => {
    checkPermission(item) && router.addRoute('mainbox', item)
  })

  store.commit('ChangeGetterRouter', true)
}

const checkPermission = (item) => {
  if (item.requirAdmin) {
    return store.state.userInfo.role == 1
  }
  return true
}

export default router
