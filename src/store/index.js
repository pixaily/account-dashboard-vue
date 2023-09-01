import { createStore } from 'vuex';

import user from './modules/user/index.js'
import teams from './modules/teams/index.js'

const store = createStore({
  modules: {
    user,
    teams
  },

})

export default store; 