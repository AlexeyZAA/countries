import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import { extend } from 'vee-validate'
import { required } from 'vee-validate/dist/rules';

import 'vuetify/dist/vuetify.min.css'

Vue.config.productionTip = false
extend('required', {
  ...required,
  message: 'Это поле обязательно для заполнения'
});

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
