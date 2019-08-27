import Vue from 'vue'
import Router from 'vue-router'
import theUserInfo from '../components/admin/Main/the-userInfo'
import theSoftware from '../components/admin/Main/the-software'
import theEssay from '../components/admin/Main/the-essay'
import theVideo from '../components/admin/Main/the-video'
import theAwards from '../components/admin/Main/the-awards'
import theMember from '../components/admin/Main/the-member'
import Ademin from '../components/admin/admin'
import Index from '../components/index/index'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/admin'
    },
    {
      path: '/admin',
      component:Ademin,
      children:[
        {
          path: '/',
          redirect:'/admin/the-userInfo',
        },
        {
          path: '/admin/the-userInfo',
          name: 'theUserInfo',
          component: theUserInfo
        },{
          path: '/admin/the-software',
          name: 'theSoftware',
          component: theSoftware
        },{
          path: '/admin/the-essay',
          name: 'theEssay',
          component: theEssay
        },{
          path: '/admin/the-video',
          name: 'theVideo',
          component: theVideo
        },{
          path: '/admin/the-awards',
          name: 'theAwards',
          component: theAwards
        },{
          path: '/admin/the-member',
          name: 'theMember',
          component: theMember
        }
      ]
    },{
      path: '/index',
      component:Index,
      children:[],
    }

  ]
})
