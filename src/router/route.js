import Vue from 'vue';
import Router from 'vue-router';

import store from '../store';

// import Sign from '../pages/sign';
// import Login from '../pages/login';
// import Home from '../pages/home';

const Sign = resolve => require(['../pages/sign'], resolve);
const Login = resolve => require(['../pages/login'], resolve);
const Dashboard = resolve => require(['../pages/dashboard'], resolve);
const Home = resolve => require(['../pages/home'], resolve);
const Search = resolve => require(['../pages/search'], resolve);
const BugList = resolve => require(['../pages/bug-list'], resolve);

Vue.use(Router);

let router = new Router({
    mode: 'hash',
    routes: [{
            path: '',
            redirect: '/sign'
        },
        {
            path: '/sign',
            component: Sign,
            children: [{
                    path: '',
                    redirect: 'login'
                },
                {
                    path: 'login',
                    component: Login
                }
            ]
        },
        {
            path: '/dashboard',
            component: Dashboard,
            children: [{
                    path: '',
                    redirect: 'home'
                },
                {
                    path: 'home',
                    component: Home,
                    meta: { requiresAuth: true }
                },
                {
                    path: 'search',
                    component: Search,
                    meta: { requiresAuth: true }
                },
                {
                    path: 'bug-list',
                    component: BugList,
                    meta: { requiresAuth: true }
                }
            ]
        }
    ]
});

// //检查路由权限
// router.beforeEach(({ meta, path }, from, next) => {
//     //var { auth = true } = meta;
//     console.log('route change');
//     if (!store.getters.isLogin && path !== '/sign/login') {
//         return next({ path: '/sign/login' });
//     }
//     next();
// });

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        // this route requires auth, check if logged in
        // if not, redirect to login page.
        if (!store.getters.isLogin) {
            next({
                path: '/sign/login',
                query: { redirect: to.fullPath }
            })
        } else {
            next()
        }
    } else {
        next() // 确保一定要调用 next()
    }
});

export default router;