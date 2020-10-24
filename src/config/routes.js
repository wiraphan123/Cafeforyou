import { lazy } from 'react'

export default{
    Home:{
        path: '/',
        exact: true,
        component: lazy(() => import ('../pages/Home'))
    },
    About: {
        path: '/review',
        component: lazy(() => import('../pages/Review'))
    },
    Contact: {
        path: '/contact',
        component: lazy(() => import('../pages/Contact'))
    },
    Story:{
        path:'/story/:storyId',
        component: lazy (()=> import('../pages/Story'))
    }
}