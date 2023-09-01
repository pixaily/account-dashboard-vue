export default {
  updateTeams(state, payload) {
    if (state.teams.length > 0) {
      state.teams = [state.teams, ...payload];
    } else {
      state.teams = [...payload];
    }
  },
  updateTeam(state, payload) {
    const team = state.teams.find(team => team.id === payload.id);
    team.is_following = payload.is_following;
  }
}