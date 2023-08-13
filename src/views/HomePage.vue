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
export default {
  components:{
    NavBar
  },
    data() {
      return {
      };
    },
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