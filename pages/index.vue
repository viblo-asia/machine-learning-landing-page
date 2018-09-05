<template>
  <section class="viblo-container">
    <Introduction/>
    <OurServices/>
  </section>
</template>

<script>
  import Introduction from '~/components/homepage/introduction.vue'
  import OurServices from '~/components/homepage/our-services.vue'

  export default {
    components: {
      Introduction,
      OurServices
    }
  }
</script>
