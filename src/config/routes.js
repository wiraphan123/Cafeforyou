import { lazy } from 'react'

export default{
    Home:{
        path: '/',
        exact: true,
        component: lazy(() => import ('../pages/Home'))
    },
    Reviwe: {
        path: '/Review',
        component: lazy(() => import('../pages/Review'))
    },
    Community: {
        path: '/Community',
        component: lazy(() => import('../pages/Community'))
    },
    Register:{
        path:'/Register',
        component: lazy (()=> import('../pages/Register'))
    },
    Login:{
        path:'/Login',
        component: lazy (()=> import('../pages/Login'))
    },
    Password:{
        path:'/Password',
        component: lazy (()=> import('../pages/Password'))
    }
    
    
}