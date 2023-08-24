<template>
    <el-container>
        <el-header height="auto">
          <div class="container">
            <div class="header">
              <img src="../assets/South_China_University_of_Technology_Logo.svg.png" alt="">
              <h1>机房预约系统</h1>
            </div>
            <NavBar />
          </div>
        </el-header>
        
        <el-main>
          <div class="main">
            <router-view></router-view>
          </div>
            
        </el-main>
    </el-container>
</template>
<script>
import NavBar from '../components/NavBar/NavBar.vue'

import {asnycRoute} from '@/router/router'
export default {
  components:{
    NavBar
  },
  data() {
      return {
      };
  },
  //访问时查看是否已经登录
  async created(){
    let token = localStorage.getItem('token');
    // console.log(token);
    if(token){
      const userInfo = await this.$request.post('/api/getUserInfo',{data:{token}});
      // console.log(userInfo);
      let roles = localStorage.getItem('role');
      const route = asnycRoute.filter((item)=>{
               if(item.meta.rules.includes(roles)){
                return true;
               }
               return false;
            })
            console.log(route);
      route.forEach((item)=>{
          this.$router.addRoute('homePage',item)
      })
      this.$store.commit('updateRoute',route)
      this.$store.commit('setToken',token);
      this.$store.commit('updateUserInfo',userInfo.data);
    }
  }
    // created(){
    //   console.log(this.$router)
    // }
}
</script>
<style scoped>

.el-header {
  display: flex;
  justify-content: center;
  padding: 0;
  background-color: rgb(34, 45, 50);
}
.el-main {
  background-color: rgb(236, 240, 245);
  padding: 0;
}
.main {
  margin: 0 15%;
  height: 80vh;
}
.container /deep/ {
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 70%;
    margin: 0 auto;
    color: #fff;
    /* background-color: #fff; */
}
.container .header{
  display: flex;
  text-align: center;
  align-items: center;
}
.container img {
  display: inline;
  width: 80px;
  height: 80px;
  margin: 20px 0;
  margin-right: 20px;
  
}
.container h1{
  display: inline;
}

h1 {
  font-size:36px
}
/* .container h1::before{
  display: block;
  background: url('../assets/South_China_University_of_Technology_Logo.svg.png');
  width: 40px;
  height: 40px;
} */
</style>