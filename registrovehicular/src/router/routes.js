const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: '/src/pages/Datos.vue', component: () => import('pages/Datos.vue') },
      { path: '/src/pages/Lector.vue', component: () => import('pages/Lector.vue') },
      //{path: '/src/pages/Api.vue', component: () => import('pages/Api.vue') },

    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
