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
import CreateChallenge from '../views/CreateChallenge';
import MyChallenges from '../views/MyChallenges';
import MyDifficulties from '../views/MyDifficulties';
import MyDailyContents from '../views/MyDailyContents';

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
        path: '/createchallenge',
        name: 'CreateChallenge',
        component: CreateChallenge
    },
    {
        path: '/mychallenges',
        name: 'MyChallenges',
        component: MyChallenges
    },
    {
        path: '/mydifficulties',
        name: 'MyDifficulties',
        component: MyDifficulties
    },
    {
        path: '/mydailycontents',
        name: 'MyDailyContents',
        component: MyDailyContents
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