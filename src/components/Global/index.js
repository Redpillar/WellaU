import HeaderVue from './HeaderVue'


export default {
    install(app) {
        app.component(HeaderVue.name,HeaderVue)
    }
}