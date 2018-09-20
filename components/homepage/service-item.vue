<template>
  <div class="service-item py-1 mb-xs-only-0 mb-sm-and-up-2 flex flex--align-middle">
    <div class="p-xs-only-05 p-sm-and-up-1 mr-xs-only-05 mr-sm-and-up-1">
      <img :src="image" :alt="name" class="service-item__image"/>
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
      image: String,
      url: String,
    }
  }
</script>

<style lang="scss">
  @import "~assets/sass/variables/colors";
  @import '~assets/sass/variables/fonts';

  .service-item {
    height: 9.375rem;
    &__image {
      @media screen and (max-width: 768px) {
        max-width: 2.8rem;
      }
    }

    &__name {
      margin-bottom: 0.5rem;
      > .link {
        font-weight: $--fw-medium;
        font-size: 1.125rem;
        color: $primary;
        text-transform: capitalize;
      }
    }
  }
</style>
