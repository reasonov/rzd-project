import { createRouter, createWebHistory } from 'vue-router';
import Home from "./pages/home-page";
import Ticket from "./pages/ticket-page";
import Rate from './pages/rate-page';

const routes = [
    {
        path: '/',
        component: Home,
        name: 'Home'
    },
    {
        path: '/ticket',
        component: Ticket,
        name: 'Ticket'
    },
    {
        path: '/rate',
        component: Rate,
        name: 'Rate'
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    mode: 'hash',
    base: '/'
})

export default router