<template>
    <div class="box">
       <img src="../../assets/error_images/404.png" alt="">
       <button @click="goHome">首页</button>
    </div>
</template>

<script >
export default {
  data(){

  },
  methods:{
    goHome(){
      this.$router.push('/')
    }
  }
}
</script>

<style scoped lang="less">
.box{
  width: 100vw;
  height: 100vh;
  background: yellowgreen;
  display: flex;
  justify-content: center;
  img{
    width: 800px;
    height: 400px;
  }
  button{
    width: 50px;
    height: 50px;
  }
}
</style>