<template>
  <div :class="{ 'section-header': true, 'section-header--uppercase': uppercase }">
    <div
      class="section-header__title"
      :class="{ [`section-header__title--${type}`]: !!type, [`section-header__title--${size}`]: !!size }">
      <slot name="title">
        <h4 class="my-1">{{ title }}</h4>
      </slot>
    </div>

    <div class="section-header__description">
      <slot>
        <p>{{ description }}</p>
      </slot>
    </div>

    <hr v-if="uppercase" class="section-header__line">
  </div>
</template>

<script>
  export default {
    props: {
      title: String,
      description: String,
      uppercase: Boolean,
      size: String,
      type: String,
    }
  }
</script>

<style lang="scss">
  @import "~assets/sass/variables/colors";

  .section-header {
    &__title,
    &__description {
      text-align: center;
      margin-top: 0.5rem;
      margin-bottom: 0.5rem;
    }

    &__title {
      color: $primary;
      font-size: 1.875rem;
      font-weight: 700;
      text-transform: capitalize;
      &--small {
        font-size: 1.4rem;
      }
      &--info {
        color: #333333;
        text-transform: initial;
      }
    }

    &--uppercase &__title {
      text-transform: uppercase;
      font-size: 1.6rem;
    }

    &__line {
      border: none;
      border-top: solid 1px $primary;
      margin-top: 1.5rem;
      width: 3.5rem;
    }
  }
</style>
