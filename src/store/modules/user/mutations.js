export default {
  addTeam(state, payload) {
    state.user.myTeams.push(payload.team)
  },
  removeTeam(state, payload) {
    state.user.myTeams = state.user.myTeams.filter(team => team.id !== payload.team.id);
  }
}