import Vue from 'vue';
import Router from 'vue-router';

// import Sign from '../pages/sign';
// import Login from '../pages/login';
// import Home from '../pages/home';

const Sign = resolve => require(['../pages/sign'], resolve);
const Login = resolve => require(['../pages/login'], resolve);
const Dashboard = resolve => require(['../pages/dashboard'], resolve);
const Home = resolve => require(['../pages/home'], resolve);

Vue.use(Router);

export default new Router({
  routes: [
  	{
  		path:'',
  		redirect:'/sign'
  	},
    {
      path: '/sign',
      component: Sign,
      children:[
    	{
  			path:'',
  			redirect:'login'
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
      children:[
      {
        path:'',
        redirect:'home'
      },
        {
          path: 'home',
          component: Home
      }
      ]
    }
  ]
});
