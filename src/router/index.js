import Vue from 'vue';
import VueRouter from 'vue-router';
import axios from 'axios';

Vue.http = Vue.prototype.$http = axios;

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: require('@/views/Dashboard.vue').default
  },
];

const router = new VueRouter({
  routes
});

export default router
