import VurRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VurRouter)

// import Home from '../components/Home'
// import About from '../components/About'
// import User from '../components/User'

//路由懒加载方式
const Home = () => import('../components/Home')
const About = () => import('../components/About')
const User = () => import('../components/User')
const HomeNews = () => import('../components/HomeNews')
const HomeMessage = () => import('../components/HomeMessage')
const Profile = () => import('../components/Profile')


const routes = [
  {
    path: '',
    // component: Home
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    children: [
      {
        path: '',
        redirect: 'homenews'
      },
      {
        path: 'homenews',
        component: HomeNews
      },
      {
        path: 'homemessage',
        component: HomeMessage
      }
    ]
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/user/:username',
    component: User
  },
  {
    path: '/profile',
    component: Profile
  }
]
var router = new VurRouter({
  routes: routes,
  mode: 'history'
})

export default router