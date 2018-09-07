<template>
  <div>
    <section class="viblo-container">
      <introduction/>
      <our-services/>
    </section>

    <how-work/>
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
