<template>
  <section class="how-work py-sm-and-up-4" id="tong-quan">
    <div class="how-work__header py-3">
      <section-header :uppercase="true">
        <template slot="title">
          <div class="how-work__header-title">How our services work?</div>
        </template>
        <p class="how-work__header-description mt-xs-only-2">
          Bạn tò mò về cách thức hoạt động của dịch vụ trên? <br>
          Dưới đây là ý tưởng chung của các dịch vụ đó!
        </p>
      </section-header>
    </div>

    <div class="viblo-container mt-sm-and-up-4 mt-xs-only-1">
      <how-work-item
        v-for="(service, index) in services"
        :key="index"
        :title="service.name"
        :image="service.image"
        :trial-url="service.url"
        :reverse="!!(index % 2)">
        <template slot="description">
          {{ service.description }}
        </template>

        <div v-html="service.contents"/>
      </how-work-item>
    </div>
  </section>
</template>

<script>
  import services from '~/contents/service-items-detail'
  import SectionHeader from '~/components/shared/section-header.vue'
  import HowWorkItem from '~/components/homepage/how-work-item.vue'

  export default {
    components: {
      SectionHeader,
      HowWorkItem
    },

    data: () => ({
      services
    })
  }
</script>

<style lang="scss">
  @import '~assets/sass/variables/colors';

  .how-work {
    &__header {
      background: $primary;
      &-title, &-description {
        color: #ffffff;
      }
    }
  }
</style>

