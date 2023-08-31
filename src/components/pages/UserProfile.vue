<template>
  <div v-if="isLoading">Loading</div>
  <div v-else>
    <profile-header :username="username" :notificationsCount="user.notificationsCount"></profile-header>
    <section>
      <figure class="user-avatar">
        <img :src="avatarSrc" :alt="username" class="user-avatar__image">
      </figure>
      <p class="user-level">Level {{user.level}}</p>
    </section>
    <profile-tabs></profile-tabs>
    <base-section :title="'Search Teams'">
      <search-field @search="search"></search-field>
      <teams-list v-if="filteredTeams.length > 0 && !teamsLoading">
        <team-item 
        v-for="team in filteredTeams"
        :key="team.id"
        :id="team.id"
        :name="team.highlightName || team.name"
        :leagues="team.highlightLeagues.length > 0 ? team.highlightLeagues : team.leagues"
        :stadium="team.highlightStadium || team.stadium"
        :showButton="true"
        :isFollowing="team.is_following"
        ></team-item>
      </teams-list>
      <p v-else-if="showMessage">No Matches Found</p>
    </base-section>
    <base-section :title="'My Teams'">
      <div v-if="user.myTeams.length === 0">
        <p>You aren't following any teams yet.</p>
      </div>
      <teams-list v-else>
        <team-item 
        v-for="team in user.myTeams"
        :key="team.id"
        :id="team.id"
        :name="team.name"
        ></team-item>
      </teams-list>
    </base-section>
  </div>
</template>

<script>
import ProfileHeader from './../ui-elements/ProfileHeader.vue'
import ProfileTabs from './../ui-elements/ProfileTabs.vue'
import SearchField from './../ui-elements/SearchField.vue'

import TeamsList from './../teams/TeamsList.vue'
import TeamItem from '../teams/TeamItem.vue'

export default {
  components: {
    ProfileHeader, 
    SearchField, 
    TeamsList, 
    TeamItem,
    ProfileTabs
  },
  data() {
    return {
      isLoading: true,
      user: {},
      filteredTeams: [],
      showMessage: false
    }
  },
  computed: {
    username() {
      return `${this.user.firstName}${this.user.lastName}`
    },
    avatarSrc() {
      if(this.user.avatar != '') {
        return require(`@/assets/images/${this.user.avatar}`);
      } else {
        return require(`@/assets/images/profile.png`)
      }
    },
    teams() {
      return this.$store.getters['teams/getTeams'];
    }
  },
  watch: {
    user() {
      if(this.user && this.user.constructor === Object && Object.keys(this.user).length > 0) {
        this.isLoading = false;
      }
    }
  },
  methods: {
    search(val) {
      this.filteredTeams = [];

      this.showMessage = false;
      
      val = val.toLowerCase();

      if(val.length > 0) {
        if(this.teams.length === 0) {
          this.teamsLoading = true;
        } else {
          this.teamsLoading = false;
          this.teams.forEach(team => {
            team.highlightName = this.checkMatches(val, team.name);
            team.highlightStadium = this.checkMatches(val, team.stadium);

            const highlightLeagues = [];
            team.highlightLeagues = [];

            team.leagues.forEach(league => {
              const highlightLeague = this.checkMatches(val, league);
              if(highlightLeague.length > 0) {
                highlightLeagues.push(highlightLeague);
              }
            })

            if(highlightLeagues.length > 0) {
              team.highlightLeagues = [...highlightLeagues]
            }
            
            if(team.highlightStadium.length > 0 || team.highlightName.length > 0 || highlightLeagues.length > 0) {
              this.filteredTeams.push(team);
            }
          })
        }
        if(this.filteredTeams.length === 0) {
          this.showMessage = true;
        }
      }
    },
    checkMatches(search, string) {
      const nameMatches = this.filterBy(search, string); 
      let highlightText = '';
      if(nameMatches && nameMatches.length > 0) {
        highlightText = this.highlightMaches(nameMatches, string);
      }
      return highlightText;
    },
    filterBy(part, str) {
      const rex = new RegExp(part, 'gmi');
      
      return [... new Set(str.match(rex))]
    },
    highlightMaches(matches, str) {
      matches.forEach(match => {
        str = str.replaceAll(match, `<mark>${match}</mark>`)
      });
      return str;
    }
  },
  mounted() {
    this.user = this.$store.getters['user/getUserData'];
  }
}
</script>

<style scoped>
mark {
  color: blue;
}
</style>