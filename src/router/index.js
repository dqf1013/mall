import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = ()=>import('../views/home/Home.vue')
const Category = ()=>import('../views/category/Category')
const Cart = ()=>import('../views/cart/Cart.vue')
const Profile = ()=>import('../views/profile/Profile.vue')


Vue.use(VueRouter)

const routes = [
  {
    path:'',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    name: Category
  },
  {
    path: '/cart',
    name: Cart
  },
  {
    path: '/profile',
    name: Profile
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
// vue-router在重复点击路由时,会报错,解决办法如下:
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
}

const originalReplace = VueRouter.prototype.replace;
VueRouter.prototype.replace = function replace(location) {
  return originalReplace.call(this, location).catch(err => err);
}

export default router
