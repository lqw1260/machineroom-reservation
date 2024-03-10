<template>
  <div class="container">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
<<<<<<< HEAD
  }
=======
  },
  async created(){
    let token = localStorage.getItem('token');
    // console.log(token);
    if(token){
      await this.$request.post('/api/getUserInfo',{data:{token}}).then((userInfo)=>{
        console.log('获取用户信息',userInfo);
        this.$store.commit('setToken',token);
        this.$store.commit('updateUserInfo',userInfo.data);
      }).catch(()=>{
        //如果收到token过期则清空本地token
        localStorage.removeItem('token');
      })
      // console.log(userInfo);
    }
  },
>>>>>>> c6dff60 (完善页面)
}
</script>

<style lang="less">
// 测试less
// @width: 400px;
// @height: 200px;

// .header {
//     width: @width;
//     height: @height;
//     background-color: yellowgreen;
// }
@import './styles/index.less';

html, body {
  margin: 0;
  padding: 0;
}
#app {
  height: 100vh;
}

</style>
