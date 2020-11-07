import actions from './actions'
import getters from './getters'
import { mutations } from './mutations'

const state = {
  farmerList: []
}

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations
}
