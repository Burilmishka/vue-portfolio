export default {
    actions: {},
    mutations: {
        updateBgClass(state, item){
            state.bgClass = item;
        }
    },
    state: {
       bgClass: 'initialClass'
    },
    getters: {
        getBgClass(state){
            return state.bgClass
        }

    }
}