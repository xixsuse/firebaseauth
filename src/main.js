import Vue from 'vue'
import firebase from 'firebase'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

const config = {
  apiKey: 'AIzaSyCcvHqaksh8DtkRaqBBJf1U529NzNWF3Hg',
  authDomain: 'vue-test-5d63e.firebaseapp.com',
  databaseURL: 'https://vue-test-5d63e.firebaseio.com',
  projectId: 'vue-test-5d63e',
  storageBucket: 'vue-test-5d63e.appspot.com',
  messagingSenderId: '511220416413'
}

firebase.initializeApp(config)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
