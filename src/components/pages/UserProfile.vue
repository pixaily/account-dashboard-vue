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
      <search-field></search-field>
      <teams-list>
        <team-item></team-item>
      </teams-list>
    </base-section>
    <base-section :title="'My Teams'">
      <div v-if="user.myTeams.length === 0">
        <p>You aren't following any teams yet.</p>
      </div>
      <teams-list v-else>
        <team-item></team-item>
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
      user: {}
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