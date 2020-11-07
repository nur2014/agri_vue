const routes = [
  {
    path: '/application-report',
    name: 'country_report',
    component: () => import('../pages/ApplicationReport.vue')
  },
  {
    path: '/farmer-report',
    name: 'farmer_report',
    component: () => import('../pages/FarmerReport.vue')
  }
]
export default routes
