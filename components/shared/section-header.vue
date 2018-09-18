<template>
  <div
    :class="{
      'section-header': true,
      'section-header--uppercase': uppercase,
      'section-header--underline': underline,
      [`section-header--align-${align}`]: true,
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
      align: {
        type: String,
        default: 'center'
      },
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

    &__description {
      font-size: 1.3rem;
    }

    &--uppercase &__title {
      text-transform: uppercase;
      font-size: 3.125rem;
    }

    &--underline &__line {
      border: none;
      border-top: solid 3px $primary;
      margin-top: 1.5rem;
      width: 3.5rem;
    }

    &--align-left {
      .section-header__title,
      .section-header__description {
        text-align: left;
      }
      .section-header__line {
        margin-left: 0;
      }
    }

    &--align-right {
      .section-header__title,
      .section-header__description {
        text-align: right;
      }
      .section-header__line {
        margin-right: 0;
      }
    }
  }
</style>
