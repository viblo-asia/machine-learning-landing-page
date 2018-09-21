<template>
  <div class="hero">
    <img src="/images/hero/slider.png" alt="Viblo's machine learning banner"/>

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
  .hero img {
    max-width: 100%;
    height: auto;
  }
</style>
