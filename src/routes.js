import Login from './components/login/Login.vue'
import SignUp from './components/login/SignUp.vue'
import ForgotPassword from './components/login/ForgotPassword.vue'
import searchPage from './components/search/searchPage.vue'
import Home from './components/home/Home.vue'
import map from './components/map/map.vue'

export default [
    { path: '/', component: SignUp },
    { path: '/login', component: Login },
    { path: '/forgot-password', component: ForgotPassword },
    { path: '/home', component: Home },
    { path: '/search', component: searchPage },
    { path: '/map', component: map }
]