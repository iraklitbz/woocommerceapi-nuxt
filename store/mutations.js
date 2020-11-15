export default {
  setCurrentDay(state, day) {
    state.currentDay = day
  },
  createCartDay(state, data) {
    state.cart = data
  },
  setTimeDilevery(state, time) {
    state.deliveryTime = time
  },
  updateDeliveryTimeOnDay(state, data) {
    state.cart = data
  },
  upadateDay(state, data) {
    state.cart[state.currentDay] = data
  }
}