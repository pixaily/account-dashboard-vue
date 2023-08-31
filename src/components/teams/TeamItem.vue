<template>
  <div class="team">
    <!-- Badge -->
    <div class="team__badge">
      <img src="" alt="">
    </div>
    <div class="team__details">
      <div class="team__leagues" v-if="leagues">
        <span v-for="(league, index) in leagues" :key="index" v-html="league"></span>
      </div>
      <div class="team__info">        
        <div class="team__name" v-html="name"></div>
        <div class="team__stadium" v-html="stadium" v-if="stadium"></div>
      </div>
    </div>
    <div class="team__action" v-if="showButton">
      <base-button :mode="'button'" :label="buttonLabel" :classes="'button button--round button--follow'" @buttonClicked="followClick" :disabled="isFollowing"></base-button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
      required: true
    },
    name: {
      type: String,
      required: true
    }, 
    badge: {
      type: String,
      required: false
    },
    leagues: {
      type: Array,
      required: false
    },
    stadium: {
      type: String,
      required: false
    },
    showButton: {
      type: Boolean,
      required: false
    },
    isFollowing: {
      type: Boolean,
      required: false
    }
  },
  computed: {
    buttonLabel() {
      return this.isFollowing ? 'Following' : 'Follow'
    }
  },
  methods: {
    followClick() {
      this.$store.dispatch('teams/updateTeam', { id: this.id, is_following: true });
    }
  }
}
</script>

<style>
</style>