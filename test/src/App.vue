<template>
  <div class="">
    <h1>h-ui</h1>
    <h2>base on element ui</h2>
    <p>
      <router-link to="/button">button</router-link>
      <router-link to="/datepicker">datepicker</router-link>
      <router-link to="/dialog">dialog</router-link>
      <router-link to="/table">table</router-link>
      <!-- <router-link to="/upload">upload</router-link> -->
      <!-- <router-link to="/swiper">swiper</router-link> -->
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
