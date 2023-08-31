export default {
  addTeam(context, payload) {
    const team = context.rootGetters['teams/getTeam'](payload.id);
    context.commit('addTeam', team)
  }
}