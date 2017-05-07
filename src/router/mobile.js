import Vue from 'vue';
import Router from 'vue-router';
import store from '../store';
import RECORD_REDIRECT_URL from '../store/mutation-types';


//const Dashboard = resolve => require(['../pages/mobile/dashboard'], resolve);
const Index = resolve => require(['../pages/mobile/index'], resolve);
const Login = resolve => require(['../pages/mobile/login'], resolve);
const Register = resolve => require(['../pages/mobile/register'], resolve);
const Class = resolve => require(['../pages/mobile/class'], resolve);
const MyIndex = resolve => require(['../pages/mobile/my-index'], resolve);
const SendIndex = resolve => require(['../pages/mobile/send-index'], resolve);
const SendMessage = resolve => require(['../pages/mobile/send-message'], resolve);
const SendProduct = resolve => require(['../pages/mobile/send-product'], resolve);
const MyFriend = resolve => require(['../pages/mobile/my-friend'], resolve);

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
        },
        {
            path: '/index/:code',
            component: Index,
        },
        {
            path: '/class',
            component: Class,
        },
        {
            path: '/send-index',
            component:SendIndex
        },
        {
            path: '/send-message',
            component:SendMessage
        },
        {
            path: '/send-product',
            component:SendProduct
        },
        {
            path: '/my-index',
            component: MyIndex
        },
        {
            path: '/my-friend',
            component: MyFriend
        }
    ]
});

//检查路由权限
router.beforeEach(({ meta, path }, from, next) => {
    //var { auth = true } = meta;
    //console.log('route change');
    if (!store.getters.isLogin && 
        ( 
            path == '/my-index' || 
            path == '/send-index' || 
            path == '/send-message' || 
            path == '/send-product'
        )
    ) {
        store.commit('RECORD_REDIRECT_URL',path);
        return next({ path: '/login' });
    }
    next();
});

export default router;