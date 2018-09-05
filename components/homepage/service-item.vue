<template>
  <div class="service-item">
    <div class="service-item__icon">
      <fa-icon :icon="faIcon"/>
    </div>

    <div class="service-item__content">
      <h3 class="service-item__name">
        <nuxt-link v-if="url" :to="url" class="link link--plain">{{ name }}</nuxt-link>
        <a v-else href="javascript:void(0);" class="link link--plain">{{ name }}</a>
      </h3>

      <div class="service-item__description">{{ description }}</div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      name: String,
      description: String,
      faIcon: String,
      url: String,
    }
  }
</script>

<style lang="scss">
  @import "~assets/sass/variables/colors";

  .service-item {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-top: 1rem;
    padding-bottom: 1rem;
    margin-bottom: 2rem;

    &__icon {
      background: $primary;
      -webkit-border-radius: 50%;
      -moz-border-radius: 50%;
      border-radius: 50%;
      color: white;
      display: block;
      font-size: 1rem;
      margin-right: 1rem;
      padding: 1rem;
      width: 50px;
      height: 50px;
      line-height: 1;
    }

    &__name {
      margin-top: 0;
      margin-bottom: 0.5rem;
      > .link {
        text-transform: capitalize;
      }
    }
  }
</style>
