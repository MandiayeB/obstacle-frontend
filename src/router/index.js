import { createRouter, createWebHistory } from 'vue-router';
import Signin from '../views/Signin';
import Home from '../views/Home';
import Profile from '../views/Profile';
import Login from '../views/Login';
import Goal from '../views/Goal';
import Dashboard from '../views/Dashboard';
import DailyContent from '../views/DailyContent';
import ProfileEditing from '../views/ProfileEditing';
import ProfilePassword from '../views/ProfilePassword';
import AddChallenge from '../views/AddChallenge';
import AdminCoach from '../views/AdminCoach';
import Difficulty from '../views/Difficulty';
import AdminDailyContent from '../views/AdminDailyContent';

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
        path: '/goal',
        name: 'Goal',
        component: Goal
    },
    {
        path: '/profile',
        name: 'Profile',
        component: Profile
    },
    {
        path: '/profilediting',
        name: 'ProfileEditing',
        component: ProfileEditing
    },
    {
        path: '/profilepassword',
        name: 'ProfilePassword',
        component: ProfilePassword
    },
    {
        path: '/addchallenge',
        name: 'AddChallenge',
        component: AddChallenge
    },
    {
        path: '/admincoach',
        name: 'AdminCoach',
        component: AdminCoach
    },
    {
        path: '/difficulty',
        name: 'Difficulty',
        component: Difficulty
    },
    {
        path: '/AdminDailyContent',
        name: 'AdminDailyContent',
        component: AdminDailyContent
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

router.beforeEach((to, from, next) => {
    if (to.name === 'Signin') next();
    else if (to.name !== 'Login' && !sessionStorage.getItem('isAuthenticated')) next({ name: 'Login' }); 
    else next();
});

export default router;