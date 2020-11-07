const routes = [
  {
    path: '/application-list',
    name: 'Country',
    component: () => import('../pages/Application.vue')
  },
  {
    path: '/farmer-list',
    name: 'Farmer',
    component: () => import('../pages/Farmer.vue')
  }
]
export default routes
