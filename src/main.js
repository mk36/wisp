import Vue from 'vue'
import App from './App.vue';

import router from './router';
require('aframe')

Vue.config.productionTip = false;
Vue.config.ignoredElements = [
  'a-scene',
  'a-asset-item',
  'a-image',
  'a-curvedimage',
  'a-assets',
  'a-text',
  'a-plane',
  'a-cylinder',
  'a-rounded',
  'a-light',
  'a-entity',
  'a-camera',
  'a-box',
  'a-sky',
  'a-cursor',
  'a-gltf-model',
  'a-triangle',
  'a-cubemap',
]

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
