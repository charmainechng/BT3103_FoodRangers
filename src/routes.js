import Login from './components/login/Login.vue'
import SignUp from './components/login/SignUp.vue'
import ForgotPassword from './components/login/ForgotPassword.vue'
<<<<<<< HEAD
import searchPage from './components/search/searchPage.vue'
=======
import MartsPage from './components/search/searchPage.vue'
>>>>>>> 520fce0ccb41322d4f2492b0cd2ed66c2fc118b8
import Home from './components/home/Home.vue'

export default [
    { path: '/', component: SignUp },
    { path: '/login', component: Login },
    { path: '/forgot-password', component: ForgotPassword },
    { path: '/home', component: Home },
    { path: '/search', component: searchPage },
   
]