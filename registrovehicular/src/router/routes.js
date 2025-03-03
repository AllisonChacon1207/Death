const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') }, // Ruta principal
      { path: '/registrovehicular/src/pages/Datos.vue', component: () => import('pages/Datos.vue') }, // Ruta para MiPrimero.vue
      { path: '/registrovehicular/src/pages/Lector.vue', component: () => import('pages/Lector.vue') }, // Ruta para MiSegundo.vue
    ],
  },

  // Siempre deja esta última ruta para manejar rutas no encontradas (404)
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
]

export default routes
