import Vue from 'vue'
import Router from 'vue-router'
const Login = () => import('@/views/Login/Login')
const Home = () => import('@/views/Home/Home')
const Users = () => import('@/views/Users/Users')
const Video = () => import('@/views/Video/Video')
const Notice = () => import('@/views/Notice/Notice')
const About = () => import('@/views/About/About')
const RegStep = () => import('@/views/Register/RegStep')
const RegName = () => import('@/views/Register/RegName')

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'login', component: Login },
    { path: '/home', name: 'home', component: Home },
    { path: '/users', name: 'user', component: Users },
    { path: '/video', name: 'video', component: Video },
    { path: '/Notice', name: 'notice', component: Notice },
    { path: '/about', name: 'about', component: About },
    { path: '/register', name: 'register', component: RegStep },
    { path: '/regname', name: 'regname', component: RegName },
  ]
})
