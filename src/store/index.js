import { createStore } from 'vuex';

import teams from './modules/teams/index.js'

const store = createStore({
  modules: {
    teams
  },

})

export default store; 