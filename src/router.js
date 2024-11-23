import {createRouter,createWebHistory} from 'vue-router'
import mainPageView from './views/mainPageView'
import loginVue from './views/pages/loginVue'
import searchPassWord from './views/pages/searchPassWord'
import resetPassWord from './views/pages/resetPassWord'
import groupMainFirst from './views/pages/groupMainFirst'
import joinGroup from './views/pages/joinGroup'
import joinGroupInvite from './views/pages/joinGroupInvite'
import groupCheck from './views/pages/groupCheck'
import createdGroup from './views/pages/createdGroup'
import shareGroup from './views/pages/shareGroup'
import groupMain from './views/pages/groupMain'
/* 가입하기 */
import joinPhone from './views/pages/joinPhone'

import testVue from './views/pages/testVue'
import vuePage01 from './views/pages/vuePage01'

/* Guide */
import GuideHeader from './views/pages/guide/GuideHeader'
import GuideDesign from './views/pages/guide/GuideDesign'


const routes = [
    {
        path : '/',
        components : {
            default : mainPageView
        },
    },
    {
        path : '/test',
        components : {
            default : testVue
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
    /* 가입하기 */
    {
        path : '/joinPhone',
        component : joinPhone,
    },
    {
        path : '/groupMainFirst',
        component : groupMainFirst,
    },
    {
        path : '/joinGroup',
        component : joinGroup,
    },
    {
        path : '/joinGroup/invite',
        component : joinGroupInvite,
    },
    {
        path : '/groupCheck',
        component : groupCheck,
    },
    {
        path : '/createdGroup',
        component : createdGroup,
    },
    {
        path : '/shareGroup',
        component : shareGroup,
    },
    {
        path : '/groupMain',
        component : groupMain,
    },
    {
        path : '/page01',
        component : vuePage01,
    },
    // Guide
    {
        path : '/GuideHeader',
        component : GuideHeader,
    },
    {
        path : '/GuideDesign',
        component : GuideDesign,
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  })

export default router