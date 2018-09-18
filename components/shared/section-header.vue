<template>
  <div
    :class="{
      'section-header': true,
      'section-header--uppercase': uppercase,
      'section-header--underline': underline
    }">
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

    <hr v-if="underline" class="section-header__line">
  </div>
</template>

<script>
  export default {
    props: {
      title: String,
      description: String,
      uppercase: Boolean,
      underline: Boolean,
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
      font-size: 3rem;
      font-weight: 700;
      text-transform: capitalize;
    }

    &--uppercase &__title {
      text-transform: uppercase;
      font-size: 3.125rem;
    }

    &--underline &__line {
      border: none;
      border-top: solid 1px $primary;
      margin-top: 1.5rem;
      width: 3.5rem;
    }
  }
</style>
