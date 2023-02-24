import VueRouter from 'vue-router'

import Home from '../views/Home'
import User from '../views/User'
import Main from '../views/Main'
import Mall from '../views/Mall'
import PageOne from '../views/PageOne'
import PageTwo from '../views/PageTwo'
import Login from '../views/Login'


//创建并暴露一个路由器
export default new VueRouter({
    routes: [
        {
            path: '/',
            component: Main,
            name: 'Main',
            redirect: '/home',  //重定向
            children: [
                // {
                //     //主页
                //     path: '/home',
                //     name: 'home',
                //     component: Home
                // },
                // {
                //     path: '/user',
                //     name: 'user',
                //     component: User
                // },
                // {
                //     path: '/mall',
                //     name: 'mall',
                //     component: Mall
                // },
                // {
                //     path: '/page1',
                //     name: 'page1',
                //     component: PageOne
                // },
                // {
                //     path: '/page2',
                //     name: 'page2',
                //     component: PageTwo
                // }
            ]
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        }

    ]
})





