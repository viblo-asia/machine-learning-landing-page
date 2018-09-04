<template>
  <nuxt-link to="/" class="logo-wrap no-underline">
    <img
      src="https://viblo.asia/logo_full.svg"
      alt="Viblo machine learning service"
      class="logo-wrap__image"/>

    <span class="logo-wrap__name">Machine learning services</span>
  </nuxt-link>
</template>

<style lang="scss">
  @import '~assets/sass/variables/colors';

  .logo-wrap {
    align-items: center;
    display: inline-flex;
    &__image {
      width: 75px;
    }
    &__name {
      color: $primary;
      font-size: 0.9375rem;
      font-weight: 700;
      margin-left: 0.625rem;
      text-transform: uppercase;
    }
  }
</style>
