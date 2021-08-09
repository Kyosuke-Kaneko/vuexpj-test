import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0,
  },
  mutations: {
    incrementMutation(state, payload) {
      console.log(payload);
      state.count += payload
    },
  },
  actions: {
    incrementAction(context) {
      setTimeout(function () { // １秒かかる通信
        let data = 1;
        console.log("waited a second");
        context.commit("incrementMutation",data);
      }, 1000);
    },
  },
});