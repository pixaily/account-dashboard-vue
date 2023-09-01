export default {
  getUserData(state) {
    return state.user;
  },
  getMyTeams(state) {
    return state.user.myTeams;
  }
}