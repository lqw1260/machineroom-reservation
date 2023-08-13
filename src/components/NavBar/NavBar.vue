<template lang="">
    <div class="nav">
        <el-menu 
        :default-active="activeIndex" 
        class="el-menu-demo" 
        mode="horizontal" 
        @select="handleSelect" 
        background-color="#222d32"
        active-text-color="#fff"
        text-color="#fff">
              <el-menu-item 
                @click="clickMenu(item)" 
                v-for="item in constantRoute" 
                :index="item.name" 
                :key="item.path"
                :class="item.name===activeIndex? 'active' : ''"
                >
                {{ item.meta.title }}
              </el-menu-item>
              <!-- <el-menu-item index="2">处理中心2</el-menu-item>
              <el-submenu  index="2">
                  <template slot="title">我的工作台</template>
                  <el-menu-item index="2-1">选项1</el-menu-item>
                  <el-menu-item index="2-2">选项2</el-menu-item>
              </el-submenu> -->
        </el-menu>
        <User-Login />
    </div>
</template>
<script>
import UserLogin from '../UserLogin/UserLogin.vue';
// import { constantRoute } from '@/router/router.js'
export default {
    components:{
        UserLogin,
    },
    data() {
      return {
        activeIndex: 'mainView',
        constantRoute:this.$store.state.routes
      };
    },
    // computed:{
    //   routes(){
    //     return this.$store.state.routes
    //   }
    // },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      clickMenu(item){
        if(item.path!== this.$route.path){
            this.$router.push({
            name: item.name
          })
        }
        this.activeIndex=item.name
      }
    },
    mounted(){
      // console.log(this.$router);
      // console.log(constantRoute);

    }
}
</script>
<style>
.active{
    background-color: #008000 !important;
}
.nav{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>