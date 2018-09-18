<template>
  <div>
    <slider/>

    <section class="viblo-container">
      <introduction/>
      <our-services/>
    </section>

    <how-work/>
  </div>
</template>

<script>
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
    }
  }
</script>
