import Vue from 'vue'
import App from './App.vue'
import router from './router'

new Vue({ // eslint-disabled-line
  el: '#app',
  router,
  render: h => h(App)
})