import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import AccountSummaryView from '../views/Register/AccountSummaryView.vue'
import CreatePasswordView from '../views/Register/CreatePasswordView.vue'
import SuccessRegistration from '../views/Register/SuccessRegistration.vue'

import SuspendedAcc from '../views/ErrorLogin/SuspendedAcc'

import loginMethods from './loginMethods'
import recoverAcc from './recoverAcc'
import manageAcc from './manageAcc'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
  },
  {
    path: '/register/create-password',
    name: 'register-pw',
    meta: {
      transition: 'slide'
    },
    component: CreatePasswordView,
  
  },
  {
    path: '/register/additional-details',
    name: 'register-summary',
    component: AccountSummaryView,
    meta: {
      transition: 'slide'
    },
  },
  {
    path: '/register/success',
    name: 'register-done',
    component: SuccessRegistration,
    meta: {
      transition: 'slide'
    },
  },
  {
    path: '/loginrejected/accountsuspended',
    name: 'err-suspendedacc',
    component: SuspendedAcc
  },




  ...loginMethods, ...recoverAcc, ...manageAcc

]



const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
