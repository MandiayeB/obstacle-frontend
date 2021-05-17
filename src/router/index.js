import {createRouter, createWebHistory} from 'vue-router';
import Signin from '../views/Signin';
import Home from '../views/Homepage';
import Profile from '../views/Profile';
import Login from'../views/Login';

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
        name: 'Sign-In',
        component: Signin
    },
    {
        path: '/profile',
        name: 'Profile',
        component: Profile
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;