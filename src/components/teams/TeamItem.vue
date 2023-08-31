<template>
  <li class="team">
    <!-- Badge -->
    <div class="team__badge">
      <img :src="badgeSrc" :alt="name">
    </div>
    <div class="team__details">
      <div class="team__leagues" v-if="leagues" v-html="leaguesStr"></div>
      <div class="team__info">        
        <div class="team__name" v-html="name"></div>
        <div class="team__stadium" v-if="stadium">
          <base-icon :class="'icon--stadium'" v-html="iconStadium"></base-icon>
          <span class="team__stadium__name" v-html="stadium" ></span>
        </div>
      </div>
    </div>
    <div class="team__action" v-if="showButton">
      <base-button :mode="'button'" :label="buttonLabel" :class="['button', 'button--primary', isFollowing ? 'active' : '']" @buttonClicked="followClick"></base-button>
    </div>
  </li>
</template>

<script>
import { svgStadium } from './../../assets/icons/SvgStore.js'

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
  data() {
    return {
      badgePlaceholder: require('@/assets/images/team-placeholder@2x.png'),
      iconStadium: svgStadium
    }
  },
  computed: {
    buttonLabel() {
      return this.isFollowing ? 'Following' : 'Follow'
    },
    badgeSrc() {
      return (this.badge && this.badge.length > 0) ? this.badge : this.badgePlaceholder;
    },
    leaguesStr() {
      return this.leagues.join(', ')
    }
  },
  methods: {
    followClick() {
      this.$store.dispatch('teams/updateTeam', { id: this.id, is_following: !this.isFollowing });
      this.$store.dispatch('user/upadteMyTeams', { id: this.id })
    }
  }
}
</script>

<style>
</style>