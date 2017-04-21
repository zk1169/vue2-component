import Vue from 'vue';
import Router from 'vue-router';
import store from '../store';


const Dashboard = resolve => require(['../pages/mobile/dashboard'], resolve);
const Index = resolve => require(['../pages/mobile/index'], resolve);
const Login = resolve => require(['../pages/mobile/login'], resolve);
const Register = resolve => require(['../pages/mobile/register'], resolve);

Vue.use(Router);

let router = new Router({
    routes: [{
            path: '',
            redirect: '/index'
        },
        {
            path: '/login',
            component: Login,
        },
        {
            path: '/register',
            component: Register,
        },
        {
            path: '/index',
            component: Index,
        }
    ]
});

//检查路由权限
// router.beforeEach(({ meta, path }, from, next) => {
//     //var { auth = true } = meta;
//     console.log('route change');
//     if (!store.getters.isLogin && path !== '/login') {
//         return next({ path: '/login' });
//     }
//     next();
// });

export default router;