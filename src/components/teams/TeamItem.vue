<template>
  <div class="team">
    <!-- Badge -->
    <div class="team__badge">
      <img src="" alt="">
    </div>
    <div class="team__details">
      <div class="team__leagues">
      </div>
      <div class="team__info">        
        <div class="team__name">{{name}}</div>
        <div class="team__stadium">{{stadium}}</div>
      </div>
    </div>
    <div class="team__action">
      <base-button :mode="'button'" :label="'Follow'" :classes="'button button--round button--follow'"></base-button>
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
    isFollowing: {
      type: Boolean,
      required: false
    }
  }
}
</script>

<style>
</style>