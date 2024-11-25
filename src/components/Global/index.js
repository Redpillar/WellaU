import HeaderVue from './HeaderVue'
import MaxInput from './MaxInput'
import MapPin from './MapPin'
import BothBar from './BothBar'
import ProfileBox from './ProfileBox'
import ModalBox from './ModalBox'
import ListSelectBox from './ListSelectBox'
import IconButtonBox from './IconButtonBox'
import IconButton from './IconButton'


export default {
    install(app) {
        app.component(HeaderVue.name,HeaderVue)
        app.component("MaxInput",MaxInput)
        app.component("MapPin",MapPin)
        app.component("BothBar",BothBar)
        app.component("ProfileBox",ProfileBox)
        app.component("ModalBox",ModalBox)
        app.component("ListSelectBox",ListSelectBox)
        app.component("IconButtonBox",IconButtonBox)
        app.component("IconButton",IconButton)
    }
}