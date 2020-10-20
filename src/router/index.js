import { createRouter, createWebHashHistory } from 'vue-router'
import TheHome from '../views/TheHome.vue'
import TheShop from '../views/TheShop.vue'
import TheCart from '../views/TheCart.vue'
import TheLogin from '../views/TheLogin.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
  {
    path: '/',
    redirect: '/home',
    name: 'App'
  },
  {
    path: '/home',
    name: 'Home',
    component: TheHome
  },
  {
    path: '/shop/:category',
    name: 'Shop',
    component: TheShop
  },
  {
    path: '/cart',
    name: 'Cart',
    component: TheCart
  },
  {
    path: '/login',
    name: 'Login',
    component: TheLogin
  },
  {
    path: '/:notFound(.*)',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  }
})

export default router
