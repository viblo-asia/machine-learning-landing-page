<template>
  <div class="p-reset">
    <hero/>

    <section class="viblo-container">
      <introduction/>
      <our-services/>
    </section>

    <how-work/>
  </div>
</template>

<script>
  import Hero from '~/components/homepage/hero.vue'
  import Introduction from '~/components/homepage/introduction.vue'
  import OurServices from '~/components/homepage/our-services.vue'
  import HowWork from '~/components/homepage/how-work.vue'

  export default {
    components: {
      Hero,
      Introduction,
      OurServices,
      HowWork
    }
  }
</script>

<style>
  .p-reset {
    margin: -20px;
  }
</style>

