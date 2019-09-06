import Vue from 'vue'
import Router from 'vue-router'
import WE from '../components/wangEditor/wE'
import theUserInfo from '../components/admin/Main/the-userInfo'
import theSoftware from '../components/admin/Main/the-software'
import theEssay from '../components/admin/Main/the-essay'
import theVideo from '../components/admin/Main/the-video'
import theAwards from '../components/admin/Main/the-awards'
import theMember from '../components/admin/Main/the-member'
import Admin from '../components/admin/admin'
import Index from '../components/index/index'
import theHome from '../components/index/home/home'
import Login from '../components/index/loginAndSign/login'
import theLogin from '../components/index/loginAndSign/login/the-login'
import theSign from '../components/index/loginAndSign/login/the-sign'
import theUser from '../components/index/user/the-user'
import theLinks from '../components/index/links/the-links'
import theContactUs from '../components/index/contactUs/the-contactUs'
import Information from '../components/index/information/information'

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect:'/index'
        },
        {
            path: '/we',
            component:WE,
            meta: {
                needLogin: true,//是否需要登录
                access: 10//登录最低权限级别
            }
        },
        {
            path: '/admin',
            component:Admin,
            children:[
                {
                    path: '/',
                    redirect:'/admin/the-userInfo',
                },
                {
                    path: '/admin/the-userInfo',
                    name: 'theUserInfo',
                    component: theUserInfo,
                    meta: {
                        needLogin: true,//是否需要登录
                        access: 10//登录最低权限级别
                    }
                },{
                    path: '/admin/the-software',
                    name: 'theSoftware',
                    component: theSoftware,
                    meta: {
                        needLogin: true,//是否需要登录
                        access: 10//登录最低权限级别
                    }
                },{
                    path: '/admin/the-essay',
                    name: 'theEssay',
                    component: theEssay,
                    meta: {
                        needLogin: true,//是否需要登录
                        access: 10//登录最低权限级别
                    }
                },{
                    path: '/admin/the-video',
                    name: 'theVideo',
                    component: theVideo,
                    meta: {
                        needLogin: true,//是否需要登录
                        access: 10//登录最低权限级别
                    }
                },{
                    path: '/admin/the-awards',
                    name: 'theAwards',
                    component: theAwards,
                    meta: {
                        needLogin: true,//是否需要登录
                        access: 10//登录最低权限级别
                    }
                },{
                    path: '/admin/the-member',
                    name: 'theMember',
                    component: theMember,
                    meta: {
                        needLogin: true,//是否需要登录
                        access: 10//登录最低权限级别
                    }
                }
            ]
        },{
            path: '/index',
            component:Index,
            children:[
                {
                    path: '',
                    redirect:'/index/home'
                },{
                    path: 'home',
                    name: 'theHome',
                    component: theHome,
                    meta: {
                        needLogin: false,
                    }
                },
            ]
        },
        {
            path: '/index/login',
            component: Login,
            children:[
                {
                    path: '/index/login',
                    name: 'theLogin',
                    component: theLogin,
                    meta: {
                        needLogin: false,
                    }
                },{
                    path: '/index/sign',
                    name: 'theSign',
                    component: theSign,
                    meta: {
                        needLogin: false,
                    }
                },
            ]
        },{
            path: '/index/user',
            name: 'theUser',
            component: theUser,
            meta: {
                needLogin: true,//是否需要登录
                access: 10//登录最低权限级别
            }
        },{
            path: '/index/links',
            name: 'theLinks',
            component: theLinks,
        },{
            path: '/index/contactUS',
            name: 'theContactUs',
            component: theContactUs,
        },{
            path: '/index/information',
            name: 'Information',
            component: Information,
        }
    ]
})
