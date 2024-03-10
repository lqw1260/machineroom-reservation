<<<<<<< HEAD


import HomePage from '../views/HomePage.vue'
import MainView from '../views/MainView/MainView.vue'
import showReservationStatus from '../views/showReservationStatus/showReservationStatus.vue'

export const constantRoute = [
    {
        path: '/',
        name: 'homePage',
        component: HomePage,
        redirect: '/main',
        children: [
            {
                path: '/main',
                name: 'mainView',
                component: MainView,
                meta: {
                    title: '主页',
                    isShow: true,
                }
            },
            {
                path: '/showReservationStatus',
                name: 'showReservationStatus',
                component: showReservationStatus,
                props(route) {
                    return {
                        item: route.query.item
                    }
                },
                meta: {
                    title: '预约情况'
                }
            },
            {
                path: '/appointmentRecord',
                name: 'appointmentRecord',
                component: () => import('@/views/AppointmentRecord/AppointmentRecord.vue'),
                meta: {
                    title: '预约记录',
                    isShow: true,
                }
            },
            {
                path: 'applicationProcessing',
                name: 'applicationProcessing',
                component: () => import('@/views/applicationProcessing/applicationProcessing.vue'),
                meta: {
                    title: '申请处理',
                    isShow: false
                }
            }
        ]
    },
    {
        //404
        path: '/404',
        component: () => import('@/views/404/NotFound.vue'),
        name: '404',
        meta: {
            title: '404',
            hidden: true,
            icon: 'DocumentDelete',
        },
    },
]

//异步路由
// export const asnycRoute = [
//     {
//         path: '/machineResvation',
//         name: 'machineResvation',
//         component: () => import('@/views/MachineReservation/MachineReservation.vue'),
//         meta: {
//             title: '机房预约',
//             rules: ['admin', 'teacher']
//         }
//     }

// ]

//任意路由
export const anyRoute = {
    //任意路由
    path: '/:pathMatch(.*)*',
    redirect: '/404',
    name: 'Any',
    meta: {
        title: '任意路由',
        hidden: true,
        icon: 'DataLine',
    },
=======


import HomePage from '../views/HomePage.vue'
import MainView from '../views/MainView/MainView.vue'
import showReservationStatus from '../views/showReservationStatus/showReservationStatus.vue'

export const constantRoute = [
    {
        path: '/',
        name: 'homePage',
        component: HomePage,
        redirect: '/main',
        children: [
            {
                path: '/main',
                name: 'main',
                component: MainView,
                meta: {
                    title: '主页',
                    isShow: true,
                }
            },
            {
                path: '/showReservationStatus',
                name: 'showReservationStatus',
                component: showReservationStatus,
                props(route) {
                    return {
                        item: route.query.item
                    }
                },
                meta: {
                    title: '预约情况'
                }
            },
            {
                path: '/appointmentRecord',
                name: 'appointmentRecord',
                component: () => import('@/views/AppointmentRecord/AppointmentRecord.vue'),
                meta: {
                    title: '预约记录',
                    isShow: true,
                }
            },
            {
                path: 'applicationProcessing',
                name: 'applicationProcessing',
                component: () => import('@/views/applicationProcessing/applicationProcessing.vue'),
                meta: {
                    title: '申请处理',
                    isShow: false
                }
            }
        ]
    },
    //用户个人信息页面
    {
        path:'/userinfo',
        component:() => import('@/views/UserView/Userinfo'),
        name:'userinfo',
        meta: {
            title: '用户信息',
        },
    },
    //用户管理页面
    {
        path:'/usermanage',
        component:() => import('@/views/AdminView/UserManage'),
        name:'usermanage',
        meta: {
            title: '用户管理',
        },
    },
    //机房管理页面
    {
        path:'/roommanage',
        component:() => import('@/views/AdminView/RoomManage'),
        name:'roommanage',
        meta: {
            title: '机房信息',
        },
    },
    {
        //404
        path: '/404',
        component: () => import('@/views/404/NotFound.vue'),
        name: '404',
        meta: {
            title: '404',
            hidden: true,
            icon: 'DocumentDelete',
        },
    },
   
]

//异步路由
// export const asnycRoute = [
//     {
//         path: '/machineResvation',
//         name: 'machineResvation',
//         component: () => import('@/views/MachineReservation/MachineReservation.vue'),
//         meta: {
//             title: '机房预约',
//             rules: ['admin', 'teacher']
//         }
//     }

// ]

//任意路由
export const anyRoute = {
    //任意路由
    path: '/:pathMatch(.*)*',
    redirect: '/404',
    name: 'Any',
    meta: {
        title: '任意路由',
        hidden: true,
        icon: 'DataLine',
    },
>>>>>>> c6dff60 (完善页面)
}