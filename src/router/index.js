import Vue from 'vue'
import Router from 'vue-router'
const Index = () => import('@/views/Index/Index')
const Home = () => import('@/views/Home/Home')
const Users = () => import('@/views/Users/Users')
const Video = () => import('@/views/Video/Video')
const Notice = () => import('@/views/Notice/Notice')
const About = () => import('@/views/About/About')
const Register = () => import('@/views/Register/Register')
const RegName = () => import('@/views/RegName/RegName')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component:  Index
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/users',
      component: Users
    },
    {
      path: '/video',
      component: Video
    },
    {
      path: '/Notice',
      component: Notice
    },
    {
      path: '/about',
      component: About
    },
    {
      path: '/register',
      component: Register,
      children: [
        {
          path: 'regname',
          component: RegName
        }
      ]
    }
  ]
})
