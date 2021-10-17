import { createRouter, createWebHistory } from 'vue-router';
import Signin from '../views/Signin';
import Home from '../views/Home';
import Profile from '../views/profile/Profile';
import Login from '../views/Login';
import Goal from '../views/Goal';
import Dashboard from '../views/Dashboard';
import DailyContent from '../views/DailyContent';
import ProfileEditing from '../views/profile/ProfileEditing';
import ProfilePassword from '../views/profile/ProfilePassword';
import CreateChallenge from '../views/publishing/CreateChallenge';
import MyChallenges from '../views/publishing/MyChallenges';
import MyDifficulties from '../views/publishing/MyDifficulties';
import MyDailyContents from '../views/publishing/MyDailyContents';
import UpdateDailyContent from '../views/publishing/UpdateDailyContent';
import CreateDailyContent from '../views/publishing/CreateDailyContent';

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
    },
    {
        path: '/updatedailycontent',
        name: 'UpdateDailyContent',
        component: UpdateDailyContent

    },
    {
        path: '/createdailycontent',
        name: 'CreateDailyContent',
        component: CreateDailyContent
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