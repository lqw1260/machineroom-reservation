export default {
    state: {
        token: ''
    },
    mutations: {
        setToken(state, val) {
            state.token = val
            localStorage.setItem('token', val)
        },
        clearToken(state) {
            state.token = ''
            localStorage.removeItem('token')
        },
        getToken(state) {
            console.log('有人读取user.token');
            state.token = state.token || localStorage.getItem('token')
        }
    }
}