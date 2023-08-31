<template>
  <header class="header">
    <div class="header__left">
      <!-- Back button -->
      <base-button :mode="'router'" :to="'/'" :label="'Back'" :classes="'something icon arrow-left'" :icon="'arrow-left'"></base-button>
      <figure>
        <img src="../../assets/images/logo.png" alt="">
      </figure>
    </div>
    <div class="header__center">
      <!-- Logo -->
      <div class="logo">
        <img src="" alt="">
      </div>
      <!-- Mobile Username -->
      <div class="header__username">
        <p>RichyRich</p>
      </div>
    </div>
    <div class="header__right">
      <!-- Notifications button -->
      <base-button :mode="'button'" >
        <span>2</span>
      </base-button>
    </div>
  </header>
</template>

<script>
export default {
}
</script>

<style>
</style>