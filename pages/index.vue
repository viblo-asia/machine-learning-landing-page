<template>
  <div class="p-reset">
    <slider/>

    <section class="viblo-container">
      <introduction/>
      <our-services/>
    </section>

    <how-work/>
  </div>
</template>

<script>
  import particlesConfig from '~/contents/particles'
  import Slider from '~/components/homepage/slider.vue'
  import Introduction from '~/components/homepage/introduction.vue'
  import OurServices from '~/components/homepage/our-services.vue'
  import HowWork from '~/components/homepage/how-work.vue'

  export default {
    components: {
      Slider,
      Introduction,
      OurServices,
      HowWork
    },

    methods: {
      initParticlesJS() {
        window.pJSDom = []
        particlesJS('viblo-background', particlesConfig)
      },

      destroyParticlesJS() {
        if (window.pJSDom && window.pJSDom[0]) {
          window.pJSDom[0].pJS.fn.vendors.destroypJS()
        }
      }
    },

    mounted() {
      require('particles.js')

      this.$nextTick(() => {
        this.initParticlesJS()
      })
    },

    beforeDestroy() {
      this.destroyParticlesJS()
    },
  }
</script>

<style>
  .p-reset {
    margin: -20px;
  }
</style>

