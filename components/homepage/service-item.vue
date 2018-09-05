<template>
  <div class="service-item py-1 mb-2 flex flex--align-middle">
    <div class="service-item__icon p-1 mr-1">
      <fa-icon :icon="faIcon"/>
    </div>

    <div class="service-item__content">
      <h3 class="service-item__name mt-0">
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
    &__icon {
      background: $primary;
      -webkit-border-radius: 50%;
      -moz-border-radius: 50%;
      border-radius: 50%;
      color: white;
      display: block;
      font-size: 1rem;
      width: 50px;
      height: 50px;
      line-height: 1;
    }

    &__name {
      margin-bottom: 0.5rem;
      > .link {
        text-transform: capitalize;
      }
    }
  }
</style>
