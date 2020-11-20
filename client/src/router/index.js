import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
  },
  {
    path: '/productosPopulares',
    name: 'ProductosPopulares',
    component: () => import(/* webpackChunkName: "productosPopulares" */ '../views/ProductosPopulares.vue')
  },
  {
    path: '/tienda',
    name: 'Tienda',
    component: () => import(/* webpackChunkName: "Tienda" */ '../views/Tienda.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import(/* webpackChunkName: "admin" */ '../views/Admin.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/registrarsePedidos',
    name: 'RegistrarsePedidos',
    component: () => import(/* webpackChunkName: "registrarsePedidos" */ '../views/RegistrarsePedidos.vue')
  },
  {
    path: '/ingresar',
    name: 'Ingresar',
    component: () => import(/* webpackChunkName: "ingresar" */ '../views/Ingresar.vue')
  },
  {
    path: '/productos',
    name: 'Productos',
    component: () => import(/* webpackChunkName: "productos" */ '../views/Productos.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/ordenes',
    name: 'Ordenes',
    component: () => import(/* webpackChunkName: "ordenes" */ '../views/Ordenes.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/ingresarproductos',
    name: 'Ingresarproductos',
    component: () => import(/* webpackChunkName: "ingresarproductos" */ '../views/Ingresarproductos.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/clientes',
    name: 'Clientes',
    component: () => import(/* webpackChunkName: "clientes" */ '../views/Clientes.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "Login" */ '../views/AppLogin.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.state.auth) {
        next();
    } else {
      next({name: 'Login'});
    }
  } else {
    next();
  }
});

export default router
