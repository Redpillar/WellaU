import {createRouter,createWebHistory} from 'vue-router'
import mainPageView from '@views/mainPageView'
import loginVue from '@pages/loginVue'
import searchPassWord from '@pages/searchPassWord'
import searchPassWordCode from '@pages/searchPassWordCode'
import resetPassWord from '@pages/resetPassWord'
import groupMainFirst from '@pages/groupMainFirst'
import joinGroup from '@pages/joinGroup'
import joinGroupInvite from '@pages/joinGroupInvite'
import groupCheck from '@pages/groupCheck'
import createdGroup from '@pages/createdGroup'
import shareGroup from '@pages/shareGroup'
import groupMain from '@pages/groupMain'
import locationDetail from '@pages/locationDetail'
import locationSharing from '@pages/locationSharing'
import locationSharingDoneTime from '@pages/locationSharingDoneTime'
/* 가입하기 */
import joinPhoneInput from '@pages/joinPhoneInput'
import joinPhoneCheck from '@pages/joinPhoneCheck'
import enterPassword from '@pages/enterPassword'
import enterProfile from '@pages/enterProfile'
import provisionAgree from '@pages/provisionAgree'
import provisionView from '@pages/provisionView'
import authorityCheck from '@pages/authorityCheck'

import testVue from '@pages/testVue'
import vuePage01 from '@pages/vuePage01'

/* Guide */
import GuideHeader from '@pages/guide/GuideHeader'
import GuideDesign from '@pages/guide/GuideDesign'


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
        path : '/searchPassWordCode',
        component : searchPassWordCode,
    },
    {
        path : '/resetPassWord',
        component : resetPassWord,
    },
    /* 가입하기 */
    {
        path : '/joinPhoneInput',
        component : joinPhoneInput,
    },
    {
        path : '/joinPhoneCheck',
        component : joinPhoneCheck,
    },
    {
        path : '/enterPassword',
        component : enterPassword,
    },
    {
        path : '/enterProfile',
        component : enterProfile,
    },
    {
        path : '/provisionAgree',
        component : provisionAgree,
    },
    {
        path : '/provisionView',
        component : provisionView,
    },
    {
        path : '/authorityCheck',
        component : authorityCheck,
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
        path : '/locationDetail',
        component : locationDetail,
    },
    {
        path : '/locationSharing',
        component : locationSharing,
    },
    {
        path : '/locationSharingDoneTime',
        component : locationSharingDoneTime,
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