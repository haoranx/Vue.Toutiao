import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state={
   showMenu:true,
   showHeader:true
}

const mutations={
   showMenu(state,flag){
    state.showMenu=flag;
   },
   showHeader(state,flag){
    state.showHeader=flag;
   }

}

export default new Vuex.Store({
  state,
  mutations
})