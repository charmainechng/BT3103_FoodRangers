import Login from './components/login/Login.vue'
import SignUp from './components/login/SignUp.vue'
import ForgotPassword from './components/login/ForgotPassword.vue'
import searchPage from './components/search/searchPage.vue'
import Home from './components/home/Home.vue'
import martPage from './components/mart/martPage.vue'
import itemsPage from "./components/items/itemsPage.vue"
import Dashboard from "./components/dashboard/Dashboard.vue"
import Settings from "./components/settings/Settings.vue"

export default [
    { path: '/', component: SignUp },
    { path: '/login', component: Login },
    { path: '/forgot-password', component: ForgotPassword },
    { path: '/home', component: Home },
    { path: '/search', component: searchPage },
    { path:'/mart', component: martPage},
    { path: '/items', component: itemsPage},
    { path: '/dashboard', component: Dashboard},
    {path: '/settings', component: Settings}
   
]