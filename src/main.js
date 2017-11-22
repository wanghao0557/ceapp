// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.component('web-footer', {
  template: '<div>This is footer</div>'
});
new Vue({
  el: '#app',
  router,
  template: '<div><App/><web-footer/></div>',
  components: { App }
})
