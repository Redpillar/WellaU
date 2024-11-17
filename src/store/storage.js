import { createStore } from 'vuex'

export default createStore({
    state : {
        pageStatus : "listPage",
    },
    getters : {
        getTwoPowerPageStatus(state){
            return state.pageStatus;
        }
    },
    mutations : {
        setPageStatus(state,value){
            state.pageStatus = value;
        }
    },
    actions : {
        acPageStatus({commit},state){
            commit('setPageStatus',state.pageStatus);
        }
    }
})