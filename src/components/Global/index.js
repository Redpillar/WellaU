import HeaderVue from './HeaderVue'
import MaxInput from './MaxInput.vue'


export default {
    install(app) {
        app.component(HeaderVue.name,HeaderVue)
        app.component(MaxInput.name,MaxInput)
    }
}