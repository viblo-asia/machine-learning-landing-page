<template>
  <section class="how-work py-4" id="tong-quan">
    <section-header :uppercase="true" title="How our services work?">
      Bạn tò mò về cách thức hoạt động của dịch vụ trên?
      Dưới đây là ý tưởng chung của các dịch vụ đó!
    </section-header>

    <div class="mt-4">
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
