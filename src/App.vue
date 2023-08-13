<template>
  <div class="container">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
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
