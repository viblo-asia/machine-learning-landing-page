<template>
  <div class="hero">
    <img
      v-progressive-loading
      src="/images/hero/slider-50x.png"
      data-original-src="/images/hero/slider.png"
      alt="Viblo's machine learning banner"
      class="hero__image progressive-loading"/>

    <particles-js particles-id="hero-section"/>
  </div>
</template>

<script>
  import ParticlesJs from '~/components/shared/particles-js.vue'

  export default {
    components: {
      ParticlesJs
    }
  }
</script>

<style lang="css">
  .hero .hero__image {
    width: 100%;
    height: auto;
  }
</style>
