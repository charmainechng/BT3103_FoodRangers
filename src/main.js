import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Routes from './routes.js'
import NavigationBar from './components/NavigationBar.vue'
import * as VueGoogleMaps from 'vue2-google-maps'
 
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyCSIL9ioq0rS2eGE3GW4QwumFUCNCNy-50',
  },
});

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.component('Bar', NavigationBar)

const myRouter = new VueRouter({
  routes: Routes,
  mode: "history"
})

new Vue({
  render: h => h(App),
  router: myRouter
}).$mount('#app')
