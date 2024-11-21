import {createRouter,createWebHistory} from 'vue-router'
import pageListView from './views/pageListView'
import loginVue from './views/pages/loginVue'
import searchPassWord from './views/pages/searchPassWord'
import resetPassWord from './views/pages/resetPassWord'
import vuePage01 from './views/pages/vuePage01'


const routes = [
    {
        path : '/',
        components : {
            default : pageListView
        },
    },
    {
        path : '/login',
        component : loginVue,
    },
    {
        path : '/searchPassWord',
        component : searchPassWord,
    },
    {
        path : '/resetPassWord',
        component : resetPassWord,
    },
    {
        path : '/page01',
        component : vuePage01,
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  })

export default router