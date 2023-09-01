<template>
  <div v-if="isLoading" class="loading-screen">Loading <span>...</span></div>
  <div v-else>
    <profile-header :username="username" :notificationsCount="user.notificationsCount"></profile-header>
    <main class="main container">
      <section class="profile">
        <div class="profile__details">
          <figure class="profile__avatar">
            <img :src="avatarSrc" :alt="username" class="image">
          </figure>
          <p class="profile__level">Level {{user.level}}</p>
        </div>
        <p class="profile__username hidden-sm">{{username}}</p>
      </section>
      <profile-tabs />
      <base-section :title="'Search Teams'">
        <search-field @search="search" 
        @arrowUp="arrowUpHandler"
        @arrowDown="arrowDownHandler"></search-field>
        <teams-list 
        v-if="filteredTeams.length > 0 && !teamsLoading">
          <team-item 
          v-for="(team, index) in filteredTeams"
          :key="team.id"
          :id="team.id"
          :name="team.highlightName || team.name"
          :leagues="team.highlightLeagues.length > 0 ? team.highlightLeagues : team.leagues"
          :stadium="team.highlightStadium || team.stadium"
          :showButton="true"
          :isFollowing="team.is_following"
          :class="{ 'hover': currentlyHoveredId === index }"
          @mouseenter="mouseEnterHandler(event, index)"
          ></team-item>
        </teams-list>
        <p v-else-if="showMessage" class="search__no-results">
          <base-icon class="icon--no-results" v-html="iconNoResults"></base-icon>
          <span>No Matches Found</span>
        </p>
      </base-section>
      <div class="divider"></div>
      <base-section :title="'My Teams'">
        <div v-if="user.myTeams.length === 0" class="myteams-empty">
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
    </main>
  </div>
</template>

<script>
import ProfileHeader from './../ui-elements/ProfileHeader.vue'
import ProfileTabs from './../ui-elements/ProfileTabs.vue'
import SearchField from './../ui-elements/SearchField.vue'

import TeamsList from './../teams/TeamsList.vue'
import TeamItem from '../teams/TeamItem.vue'

import { svgNoResults } from './../../assets/icons/SvgStore.js'

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
      showMessage: false,
      currentlyHoveredId: -1,
      prevSearchVal: '',
      iconNoResults: svgNoResults
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

      if(val.length > 0 && val !== this.prevSearchVal) {
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
      } else {
        this.currentlyHoveredId = -1;
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
      let temp = '';

      matches.forEach(match => {
        temp = str.replaceAll(match, `<mark>${match}</mark>`)
      });
      return temp;
    },
    arrowUpHandler() {
      const lastId = this.filteredTeams.length - 1;
      
      if(lastId !== -1) {
        if(!this.currentlyHoveredId || this.currentlyHoveredId === 0) {
          this.currentlyHoveredId = lastId
        } else {
          this.currentlyHoveredId -= 1;
        }
      }
    },
    arrowDownHandler() {
      const lastId = this.filteredTeams.length - 1;

      if(lastId !== -1) {
        if(this.currentlyHoveredId === lastId) {
          this.currentlyHoveredId = 0
        } else {
          this.currentlyHoveredId += 1;
        }
      }
    },
    mouseEnterHandler(_, index) {
      this.currentlyHoveredId = index;
    }
  },
  mounted() {
    this.user = this.$store.getters['user/getUserData'];
  }
}
</script>

<style lang="scss">
@import './../../assets/styles/pages/profile-page.scss';
</style> 