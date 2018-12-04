<template>
  <div :id="particlesId" class="particles-js"/>
</template>

<script>
  import defaultConfig from '~/contents/particles'

  export default {
    props: {
      particlesId: {
        type: String,
        required: true
      },

      config: {
        type: Object,
        default: () => defaultConfig
      }
    },

    methods: {
      initParticlesJS() {
        window.pJSDom = []
        particlesJS(this.particlesId, this.config)
      },

      destroyParticlesJS() {
        if (window.pJSDom && window.pJSDom[0]) {
          window.pJSDom[0].pJS.fn.vendors.destroypJS()
        }
      }
    },

    mounted() {
      require('particles.js')

      this.$nextTick(() => this.initParticlesJS())
    },

    beforeDestroy() {
      this.destroyParticlesJS()
    }
  }
</script>

<style lang="css">
  .particles-js {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
</style>
