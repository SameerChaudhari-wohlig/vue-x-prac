import axios from "axios";
import { createStore } from "vuex";
const store = createStore({
  state() {
    return {
      counter: 0,
    };
  },
  mutations: {
    increment(state) {
      state.counter++;
    },
      decrement(state) {
      state.counter--;
    },
        incrementCounter(state, randomNumber) {
      state.counter += randomNumber
    },
      decrementCounter(state, randomNumber) {
      state.counter -= randomNumber;
    },

  },
  actions:{
     incrementCounter( {commit} ){
        console.log('incrementCounter (action)')
        axios('https://www.random.org/integers/?num=1&min=1&max=10&col=1&base=10&format=plain&rnd=new').then ( response => {
            commit('incrementCounter', response.data)
        })
    },
         decrementCounter( {commit} ){
        console.log('incrementCounter (action)')
        axios('https://www.random.org/integers/?num=1&min=1&max=10&col=1&base=10&format=plain&rnd=new').then ( response => {
            commit('decrementCounter', response.data)
        })
    }
  }
});

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(store);
  // Install the store instance as a plugin

});