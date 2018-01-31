// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import firebase from 'firebase'

// Initialize Firebase
const config = {
  apiKey: 'AIzaSyAUZhT_QbNAmyHqin5D95CcoVvavdCOJms',
  authDomain: 'my-portfolio-8e3f5.firebaseapp.com',
  databaseURL: 'https://my-portfolio-8e3f5.firebaseio.com',
  projectId: 'my-portfolio-8e3f5',
  storageBucket: 'my-portfolio-8e3f5.appspot.com',
  messagingSenderId: '461561054781'
}
firebase.initializeApp(config)

Vue.config.productionTip = false
Vue.use(BootstrapVue)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
