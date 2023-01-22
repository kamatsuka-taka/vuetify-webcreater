// p355 8-1
import { createRouter, createWebHistory } from 'vue-router';

import AppComponent from '../components/AppComponent.vue'

// ルーティングを設定
const routes = [
    {
        path: "/",
        name: "App",
        component: AppComponent,
    },
    {
        path:'/concept',
        name: 'Concept',
        component: () => import( '../components/ConceptComponent.vue')
    },
    {
        path:'/plan',
        name: 'Plan',
        component: () => import( '../components/PlanComponent.vue')
    },
    {
        path:'/fair',
        name: 'Fair',
        component: () => import( '../components/FairComponent.vue')
    },
    {
        path:'/contact',
        name: 'Contact',
        component: () => import( '../components/ContactComponent.vue')
    },
    // 2個目 3個目作りたいとき
    // {
    //     path:'/about2',
    //     name: 'About2',
    //     component: () => import( '../views/About.vue')
    // }
]

// ルータを生成
const router = createRouter({
    history: createWebHistory(process.env.Base_URL),
    routes
})

// 外部に
export default router