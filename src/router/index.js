import Vue from 'vue'
import VueRouter from 'vue-router'

import { constantRoute } from './router.js'


Vue.use(VueRouter)



const router = new VueRouter({
    history,
    routes: constantRoute,
})

router.beforeEach((to, from, next) => {
    // console.log(to, from)
    if (to === from) {
        return false
    }
    next()
})
export default router