import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {path : '', name: 'logo', component: () => import('@/views/Logo.vue')},
    {path : '', name: 'home', component: () => import('@/views/Home.vue')},
    {path : '/products', name: 'products', component: () => import('@/views/Products.vue')},
    {path : '/eplaza', name: 'eplaza', component: () => import('@/views/Eplaza.vue')},
    {path : '/blog', name: 'blog', component: () => import('@/views/Blog.vue')},
    {path : '/support', name: 'support', component: () => import('@/views/Support.vue')},
    {path : '/about', name: 'about', component: () => import('@/views/About.vue')},
    {path : '/contact', name: 'contact', component: () => import('@/views/Contact.vue')},
    {path : '/jobs', name: 'jobs', component: () => import('@/views/Jobs.vue')},
]

const router = createRouter({
    routes,
    history: createWebHistory(),
})

export default router;
