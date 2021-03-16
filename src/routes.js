import Login from './components/Login.vue'
import SignUp from './components/SignUp.vue'
import ForgotPassword from './components/ForgotPassword.vue'
import MartsPage from './components/mart/martsPage.vue'

export default [
    { path: '/', component: SignUp },
    { path: '/login', component: Login},
    { path: '/forgot-password', component: ForgotPassword},
    { path: '/search', component: MartsPage}
]