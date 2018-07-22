import Vue from 'vue'
import Router from 'vue-router'
const Login = () => import('@/views/Login/Login')
const Home = () => import('@/views/Home/Home')
const Users = () => import('@/views/Users/Users')
const Notice = () => import('@/views/Notice/Notice')
const About = () => import('@/views/About/About')
const RegStep = () => import('@/views/Register/RegStep')
const RegName = () => import('@/views/Register/RegName')
const RegPwd = () => import('@/views/Register/RegPwd')
const Register = () => import('@/views/Register/Register')
const UserInfo = () => import('@/components/UserInfo/UserInfo')

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'login', component: Login },
    { path: '/home', name: 'home', component: Home},
    { path:'/share', component:UserInfo,name:'share'},
    { path: '/users', name: 'user', component: Users },
    { path: '/Notice', name: 'notice', component: Notice },
    { path: '/about', name: 'about', component: About },
    { path: '/register', name: 'register', component: RegStep },
    { path: '/regname', name: 'regname', component: RegName },
    { path: '/regpwd', name: 'regpwd', component: RegPwd },
    { path: '/regLast', name: 'regLast', component: Register },
  ]
})
