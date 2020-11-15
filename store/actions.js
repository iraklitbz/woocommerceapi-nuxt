export default {
  createCartDay({ state, commit }, day) {
    if (!state.cart[day]) {
      commit('createCartDay', {
        ...state.cart,
        [day]: {}
      })
    }
  },
  updateDeliveryTimeOnDay({ state, commit }) {
    for (let id in state.cart[state.currentDay]) {
      state.cart[state.currentDay][id].time = state.deliveryTime
    }

    commit('updateDeliveryTimeOnDay', state.cart)
  }
}