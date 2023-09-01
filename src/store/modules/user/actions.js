export default {
  upadteMyTeams(context, payload) {
    const myTeams = context.getters['getMyTeams'];
    const team = myTeams.find(team => team.id === payload.id);

    if (team) {
      context.commit('removeTeam', { team })
    } else {
      const team = context.rootGetters['teams/getTeam'](payload.id);
      context.commit('addTeam', { team })
    }
  }
}