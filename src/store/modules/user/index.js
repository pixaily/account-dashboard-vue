import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default {
  namespaced: true,
  state() {
    return {
      user: {
        firstName: 'Richy',
        lastName: 'Rich',
        avatar: '',
        level: 5,
        notificationsCount: 2,
        myTeams: []
      }
    }
  },
  mutations,
  actions,
  getters
}