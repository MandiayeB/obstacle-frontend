import {createRouter, createWebHistory} from 'vue-router';
import Signin from '../views/Signin';
import Home from '../views/Homepage';
import Profile from '../views/Profile';
import Login from '../views/Login';
import Goal from '../views/Goal';
import Dashboard from '../views/Dashboard';
import DailyContent from '../views/DailyContent';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard
    },
    {
        path: '/dailycontent',
        name: 'DailyContent',
        component: DailyContent
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/signin',
        name: 'Signin',
        component: Signin
    },
    {
        path: '/profile',
        name: 'Profile',
        component: Profile
    },
    {
        path: '/goal',
        name: 'Goal',
        component: Goal
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;