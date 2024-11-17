import {createRouter,createWebHistory} from 'vue-router'
import pageListView from './views/pageListView'
import vuePage01 from './views/pages/vuePage01'


const routes = [
    {
        path : '/',
        components : {
            default : pageListView
        },
    },
    {
        path : '/page01',
        component : vuePage01,
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  })

export default router