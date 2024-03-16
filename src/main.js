import Vue from 'vue'
import App from './App.vue'
// 引入element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// 引入router
import router from './router';
// 引入store
import store from './store';
// import "./styles";
// import './api/mock'
Vue.config.productionTip = false

Vue.use(ElementUI);
//挂载请求方法到vue原型链上
import request from './api/request';
Vue.prototype.$request = request;
// request.post('/api/login', {
//   data: {
//     username: 'admin',
//     password: '111111'
//   }
// }).then(req)
// function req(result) {
//   console.log(result.data);
// }
// console.log(test);
const vue = new Vue({
  router,
  store,
  render: h => h(App),
})
vue.$mount('#app')
