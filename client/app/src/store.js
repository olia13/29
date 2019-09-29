import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    login: '',
    password:'',
    
  },
  mutations: {
    setName(state, value){
      state.login = value.login,
      state.password = value.password
      
    }
  },
  actions: {
    asyncSetName(context) {
      
      fetch('http://localhost:3000/persons')
        .then(data => data.json())
        .then(data => {
            
            if (data.login == context.state.login && data.password == context.state.password) {
              console.log('OK');
              return data;
            } else {
              console.log('error');
              return 'error';
          }
        })
         
        .then(data => context.commit('setName', data));
    }
  }
})
