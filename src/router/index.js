import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Details from '../components/FreelancePage.vue'
import Contact from '../views/Contact'
import createProfile from '../views/CreateProfile.vue'

import Auth from '../views/Auth'

import Admin from '../views/Admin'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: "/auth",
    name: "Auth",
    component: Auth
  },
  {
    path: '/admin',
    name: "Admin",
    component: Admin
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/detail/:id',
    name: "Detail",
    component: Details
  },
  //temporary for development
  {
    path: '/create-profile',
    name: 'create-profile',
    component: createProfile
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
