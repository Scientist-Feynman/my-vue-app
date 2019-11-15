import Vue from 'vue'
import VueRouter from 'vue-router'

import Nav from '@/components/Nav'
//import Main from '@/components/Main'
//import Video from '@/components/Video'
//import Picture from '@/components/Picture'
import Film from '@/components/Film'
import Teleplay from '@/components/Teleplay'
import Documentary from '@/components/Documentary'
import PopularScience from '@/components/PopularScience'
import ListItem from '@/components/ListItem'

Vue.use(VueRouter)

export default new VueRouter({
    mode:'history',
    routes:[
        {
            path:'/',
            redirect:'/main',
            component: Nav
        },
        {
            path:'/main',
            component: resolve => require(['@/components/Main'],resolve),
            children:[
                {
                    path:'/main/listitem/:id',
                    component: ListItem
                }
            ]
        },
        {
            path:'/video',
            component: resolve => require(['@/components/Video'],resolve),
            children:[
                {
                    path:'/video/film',
                    component: Film
                },
                {
                    path:'/video/teleplay',
                    component: Teleplay
                },
                {
                    path:'/video/documentary',
                    component: Documentary
                },
                {
                    path:'/video/popularscience',
                    component: PopularScience
                }
            ]
        },
        {
            path:'/picture',
            component: resolve => require(['@/components/Picture'],resolve)
        },

        { path: '*', redirect: '/404', hidden: true }
    ]
})