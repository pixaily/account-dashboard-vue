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
        :isFollowing="team.is_following"
        ></team-item>
      </teams-list>
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
        :leagues="team.leagues"
        :stadium="team.stadium"
        :isFollowing="team.is_following"
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
      filteredTeams: []
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
      
      val = val.toLowerCase();

      if(val.length > 0) {
        if(this.teams.length === 0) {
          this.teamsLoading = true;
        } else {
          this.teamsLoading = false;
          this.teams.forEach(team => {
            let isAMatch = false;

            if(this.filterBy(val, team.name)) {
              team.highlightName = this.highlightMach(val, team.name);
              isAMatch = true;
            }

            if(this.filterBy(val, team.stadium)) {
              team.highlightStadium = this.highlightMach(val, team.stadium);
              isAMatch = true;
            }

            if(isAMatch) {
              this.filteredTeams.push(team);
            }
          })
        }      
      }
    },
    filterBy(part, str) {
      return str.toLowerCase().replace(' ', '').includes(part)
    },
    highlightMach(part, str) {
      return str.split(part).join('<mark>'+part+'</mark>');
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