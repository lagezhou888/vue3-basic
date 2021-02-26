import { RouteRecordRaw, createRouter, createWebHashHistory } from 'vue-router'
const routes: RouteRecordRaw[] = [
    { path: '/', name: 'Home', component: () => import('@/views/Home.vue') },
    { path: '/login', name: 'login', component: () => import('@/views/Login.vue') },
    { path: '/column/:id', name: 'column', component: () => import('@/views/ColumnDetail.vue') }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
