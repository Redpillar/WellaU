import HeaderVue from './HeaderVue'
import MaxInput from './MaxInput'
import MapPin from './MapPin'
import BothBar from './BothBar'
import ProfileBox from './ProfileBox'


export default {
    install(app) {
        app.component(HeaderVue.name,HeaderVue)
        app.component("MaxInput",MaxInput)
        app.component("MapPin",MapPin)
        app.component("BothBar",BothBar)
        app.component("ProfileBox",ProfileBox)
    }
}