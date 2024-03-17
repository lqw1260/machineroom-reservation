import Vue from 'vue'
import Vuex from 'vuex'
// import user from './user'
import { constantRoute } from '@/router/router'
Vue.use(Vuex)

//准备actions对象——响应组件中用户的动作、处理业务逻辑
// const actions = {}
//准备mutations对象——修改state中的数据
const mutations = {
    setToken(state, val) {
        state.token = val
        localStorage.setItem('token', val)
    },
    setTokenName(state, val) {
        state.tokenName = val
        localStorage.setItem('tokenName', val)
    },
    clearToken(state) {
        state.token = ''
        localStorage.removeItem('token')
    },
    getToken(state) {
        console.log('有人读取user.token');
        state.token = state.token || localStorage.getItem('token') || ''
    },
    updateRoute(state, val) {
        state.routes.push(...val)
    },
    updateUserInfo(state, val) {
        // state.user.name = val.name
        Object.assign(state.user, val);
        console.log(state.user);
        // state.user = val
        if (val.type === 1) {
            state.routes.push({
                path: 'applicationProcessing',
                name: 'applicationProcessing',
                component: () => import('@/views/applicationProcessing/applicationProcessing.vue'),
                meta: {
                    title: '申请处理',
                    isShow: true
                }
            })
        }

    }
}
//准备state对象——保存具体的数据
const state = {
    token: localStorage.getItem('token') || '',
    tokenName: localStorage.getItem('tokenName') || '',
    user: {
        name: ''
    },
    routes: constantRoute[0].children.filter((item) => {
        return !!item.meta.isShow
    })
    // routes: constantRoute[0].children
}

export default new Vuex.Store({
    state,
    mutations,
})