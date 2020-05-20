/*
  路由器对象模块
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../pages/Home/Home'
import Search from '../pages/Search/Search'
import Personal from '../pages/Personal/Personal'
import Order from '../pages/Order/Order'
import Login from '../pages/Login/Login'

// 声明使用插件
Vue.use(VueRouter)
export default new VueRouter({  // 配置对象
  // 注册所有路由
  routes: [
    {
      path: '/home',
      component: Home,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/search',
      component: Search,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/order',
      component: Order,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/personal',
      component: Personal,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/',
      redirect: '/home',
      meta: {
        showFooter: true
      }
    }
  ]
})
