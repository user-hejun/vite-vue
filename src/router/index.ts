import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes:Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/pages/home.vue')
  },
  {
    path: '/hello',
    name: 'hello',
    component: () => import('@/components/test.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior (to, from, savedPosition) {
    // return 期望滚动到哪个的位置
    return savedPosition ? savedPosition : {left: 0, top: 0}
  }
})

router.beforeEach((to, from, next) => {
  next()
})

router.afterEach( to => {

})

export default router