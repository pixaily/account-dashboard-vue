<template>
  <header class="header">
    <div class="header__left">
      <!-- Back button -->
      <base-button :mode="'router'" :to="'/'" :label="'Back'" :labelClasses="'notext'">
        <base-icon class="'icon--arrow-left'" v-html="iconLeftArrow"></base-icon>
      </base-button>
      <base-button :mode="'router'" :to="'/'" :label="'Account Dashboard'" :class="'logo'" :labelClasses="'logo__text hidden-sm'">
        <span class="logo__icon" v-html="iconLogo"></span>
      </base-button>
    </div>
    <div class="header__center">
      <!-- Mobile Username -->
      <div class="header-username hidden-md">
        <p>{{username}}</p>
      </div>
    </div>
    <div class="header__right">
      <!-- Notifications button -->
      <base-button 
        :class="['notification']" 
        :label="notificationsCount" 
        :labelClasses="['notification__count']" 
        :mode="'button'">
        <base-icon :classes="['icon--notification']" v-html="iconNotification"></base-icon>
      </base-button>
    </div>
  </header>
</template>

<script>
import { svgLogo, svgLeftArrow, svgNotification } from './../../assets/icons/SvgStore.js';

export default {
  props: {
    username: {
      type: String,
      required: true
    },
    notificationsCount: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      iconLeftArrow: svgLeftArrow,
      iconNotification: svgNotification,
      iconLogo: svgLogo
    }
  }
}
</script>

<style lang="scss">
@import './../../assets/styles/ui/header';
</style>