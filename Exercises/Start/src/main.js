import Vue from 'vue'
import App from './App.vue'
import Header from './components/Header.vue'
import Servers from './components/Servers.vue'
import Footer from './components/Footer.vue'
import ServerDetails from './components/ServerDetails.vue'


Vue.component('Header', Header)
Vue.component('Servers', Servers)
Vue.component('Footer', Footer)
Vue.component('ServerDetails', ServerDetails)

new Vue({
  el: '#app',
  render: h => h(App)
})
