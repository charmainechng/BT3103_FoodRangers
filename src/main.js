import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Routes from './routes.js'
import NavigationBar from './components/NavigationBar.vue'


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
