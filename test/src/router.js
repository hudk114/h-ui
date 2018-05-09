import Vue from 'vue'
import VueRouter from 'vue-router'
import upload from './components/upload/upload'
// import swiper from './pages/swiper/swiper'
import button from './pages/button'
import datepicker from './pages/datepicker'
import dialog from './pages/dialog'
import table from './pages/table'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: button,
  },
  {
    path: '/button',
    component: button,
  },
  {
    path: '/datepicker',
    component: datepicker,
  },
  {
    path: '/dialog',
    component: dialog,
  },
  {
    path: '/table',
    component: table,
  }
];

export default new VueRouter({
  routes
});
