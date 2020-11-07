import Vue from 'vue'
import Vuex from 'vuex'
import IrrigationStore from '../modules/irrigation/store'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    common: {}
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    IrrigationStore
  }
})
