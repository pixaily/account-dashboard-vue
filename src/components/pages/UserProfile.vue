<template>
  <profile-header></profile-header>
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
    <teams-list>
      <team-item></team-item>
    </teams-list>
  </base-section>
</template>

<script>
import ProfileHeader from './../ui-elements/ProfileHeader.vue'
import SearchField from './../ui-elements/SearchField.vue'

import TeamsList from './../teams/TeamsList.vue'
import TeamItem from '../teams/TeamItem.vue'

export default {
  components: {ProfileHeader, SearchField, TeamsList, TeamItem}
}
</script>

<style>
</style>