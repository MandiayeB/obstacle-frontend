import {createRouter, createWebHistory} from 'vue-router';
import Signin from '../views/Signin';
import Home from '../views/Home';
import Profile from '../views/Profile';
import Login from '../views/Login';
import Goal from '../views/Goal';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/profile',
        name: 'Profile',
        component: Profile
    },
    {
        path: '/signin',
        name: 'Signin',
        component: Signin
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