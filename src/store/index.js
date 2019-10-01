import Vue from 'vue'
import Vuex from 'vuex'
import mainBgClass from './modules/mainBgClass'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        mainBgClass
    }
})