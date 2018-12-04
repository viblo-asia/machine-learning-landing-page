<template>
  <div class="viblo-container">
    <section-header :title="service.name" :underline="true">
      {{ service.description }}
    </section-header>

    <section v-if="showForm" class="service-page__form my-2">
      <slot name="form"/>
    </section>

    <section
      v-else-if="!processing"
      class="service-page__result my-4"
      :class="resultClass">
      <slot name="result"/>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'demo-service-page',

    props: {
      service: {
        type: Object,
        required: true
      },
      showForm: Boolean,
      processing: Boolean,
      resultClass: {
        type: String,
        default: 'flex flex--justify-center'
      }
    }
  }
</script>
