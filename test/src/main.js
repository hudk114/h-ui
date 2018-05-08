import Vue from 'vue';
import App from './App.vue';
import router from './router';
import element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './common.css';
import hui from '../../src/index';

Vue.use(element);

Vue.use(hui);

new Vue({ // eslint-disable-line
  el: '#app',
  router,
  render: h => h(App)
})
