import Vue from 'vue'
import VueRouter from 'vue-router'
import albumList from './components/album-list/album-list'
import upload from './components/upload/upload'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: albumList,
  },
  {
    path: '/albumList',
    component: albumList,
  },
  {
    path: '/upload',
    component: upload,
  },
];

export default new VueRouter({
  routes
});
