import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path : '/',
        redirect:'/home'
    },
    {
        path : '/home',
        name : 'home',
        component : () => import('/src/components/Homepage.vue'),
    },
    {
        path : '/:pathMatch(.*)*',
        name : 'notFound',
        component : () => import('/src/components/notFound.vue'),
    },
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
  })