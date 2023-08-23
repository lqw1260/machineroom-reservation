import HomePage from '../views/HomePage.vue'
import MainView from '../views/MainView/MainView.vue'

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
                }
            },
            {
                path: '/appointmentRecord',
                name: 'appointmentRecord',
                component: () => import('@/views/AppointmentRecord/AppointmentRecord.vue'),
                meta: {
                    title: '预约记录',
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
export const asnycRoute = [
    {
        path: '/machineResvation',
        name: 'machineResvation',
        component: () => import('@/views/MachineReservation/MachineReservation.vue'),
        meta: {
            title: '机房预约',
            rules: ['admin', 'teacher']
        }
    }

]

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
}