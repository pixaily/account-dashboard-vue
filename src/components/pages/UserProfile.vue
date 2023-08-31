<template>
  <div v-if="isLoading">Loading</div>
  <div v-else>
    <profile-header :username="username" :notificationsCount="user.notificationsCount"></profile-header>
    <section>
      <!-- Avatar -->
    </section>
    <section>
      <!-- Tabs -->
      <button>My Teams</button>
      <button>About</button>
    </section>
    <base-section :title="'Search Teams'">
      <search-field></search-field>
      <teams-list>
        <team-item></team-item>
      </teams-list>
    </base-section>
    <base-section :title="'My Teams'">
      <!-- if my teams emtpy  -->
      <div>
        <p>You aren't following any teams yet.</p>
      </div>
      <!-- else  -->
      <teams-list>
        <team-item></team-item>
      </teams-list>
    </base-section>
  </div>
</template>

<script>
import ProfileHeader from './../ui-elements/ProfileHeader.vue'
import SearchField from './../ui-elements/SearchField.vue'

import TeamsList from './../teams/TeamsList.vue'
import TeamItem from '../teams/TeamItem.vue'

export default {
  components: {ProfileHeader, SearchField, TeamsList, TeamItem},
  data() {
    return {
      isLoading: true,
      user: {}
    }
  },
  computed: {
    username() {
      return this.user.firstName + '' + this.user.lastName
    }
  },
  watch: {
    user() {
      if(this.user && this.user.constructor === Object && Object.keys(this.user).length > 0) {
        this.isLoading = false;
      }
    }
  },
  mounted() {
    this.user = this.$store.getters['user/getUserData'];
  }
}
</script>

<style>
</style>