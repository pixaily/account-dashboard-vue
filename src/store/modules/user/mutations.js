export default {
  addTeam(state, payload) {
    state.user.myTeams.push(payload)
  }
}