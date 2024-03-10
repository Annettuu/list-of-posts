import { createRouter, createWebHistory } from 'vue-router';
import MainPage from '../pages/main-page.vue';

const routes = [
    {
        path: '/',
        name: 'Main',
        component: MainPage
    },
];

const router = createRouter({
    history: createWebHistory('/'),
    routes
});


export default router;
