<template>
  <div>
    <section class="viblo-container">
      <Introduction/>
      <OurServices/>
    </section>

    <HowWork/>
  </div>
</template>

<script>
  import Introduction from '~/components/homepage/introduction.vue'
  import OurServices from '~/components/homepage/our-services.vue'
  import HowWork from '~/components/homepage/how-work.vue'

  export default {
    components: {
      Introduction,
      OurServices,
      HowWork
    }
  }
</script>
