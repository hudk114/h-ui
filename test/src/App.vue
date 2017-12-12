<template>
  <div class="">
    123
    <p>
      <router-link to="/albumList">albumList</router-link>
      <router-link to="/upload">upload</router-link>
    </p>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
</style>
