// alurapic/src/main.js

import Vue from 'vue';
import App from './App.vue';

// importando o módulo
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import { routes } from './routes';
import './directives/transform';

Vue.use(VueResource);
Vue.use(VueRouter);
Vue.http.options.root = 'http://localhost:3000';
const router = new VueRouter({ 

   routes,
   mode: 'history'

});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});