<template>
  <div class="team">
    <!-- Badge -->
    <div class="team__badge">
      <img src="" alt="">
    </div>
    <div class="team__details">
      <div class="team__leagues"></div>
      <div class="team__info">
        <div class="team__name"></div>
        <div class="team__stadium"></div>
      </div>
    </div>
    <div class="team__action">
      <base-button :mode="'button'" :label="'Follow'" :classes="'button button--round button--follow'"></base-button>
    </div>
  </div>
</template>

<script>
export default {
   props: [ 'team' ]
}
</script>

<style>
</style>