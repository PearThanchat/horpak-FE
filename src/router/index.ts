import { createRouter, createWebHistory } from 'vue-router'
import RoomsManagement from '@/views/RoomsManagement/RoomsList.vue'
import TenantManagement from '@/views/TenantManagement/TenantList.vue'
import LeaseAgreement from '@/views/LeaseAgreement/LeaseAgreementMain.vue'
import IncomeExpense from '@/views/IncomeExpense/IncomeExpenseList.vue'
import Login from '@/views/LoginLogout/Login.vue'
// Line Liff ฝั่งผู้เช่า
import TenantRegister from '@/components/LineLiff/TenantRegister.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: '/',
      component: Login
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/rooms-management',
      name: 'RoomsManagement',
      component: RoomsManagement
    },
    {
      path: '/tenant-managements',
      name: 'TenantManagement',
      component: TenantManagement
    },
    {
      path: '/lease-agreements',
      name: 'LeaseAgreement',
      component: LeaseAgreement
    },
    {
      path: '/income-expense',
      name: 'IncomeExpense',
      component: IncomeExpense
    },
    // Line Liff ฝั่งผู้เช่า
    {
      path: '/tenant-register',
      name: 'TenantRegister',
      component: TenantRegister
    }
  ]
})

// Navigation guard to redirect to /login if not authenticated
router.beforeEach((to, from, next) => {
  const isAuthenticated = true // Replace with your actual authentication check

  if (to.name !== 'login' && !isAuthenticated) {
    next({ name: 'login' })
  } else {
    next()
  }
})

export default router
