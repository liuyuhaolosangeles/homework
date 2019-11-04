
<template>
  <div id="app">

    <!-- <Test msg="这是新的属性值">
      标签名称只能和Test.vue 的name 一样
      </Test> -->
    <users></users>
  </div>
</template>

<script>

import Test from './components/Test'
import users from './components/Users'
export default {
  name: 'App',
  components: {
    Test,users
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
