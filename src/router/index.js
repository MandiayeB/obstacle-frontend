import {createRouter, createWebHistory} from 'vue-router';
import About from '../views/About';
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
        path: '/about',
        name: 'About',
        component: About
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
