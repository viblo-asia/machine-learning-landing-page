<template>
  <section class="our-services">
    <SectionHeader title="Our services" :uppercase="true">
      Các dịch vụ chúng tôi đã và đang phát triển.
    </SectionHeader>

    <el-row :gutter="20" class="our-services__list">
      <el-col v-for="(service, index) in services" :key="index" :md="8">
        <ServiceItem v-bind="service"/>
      </el-col>
    </el-row>
  </section>
</template>

<script>
  import services from '~/data/service-items'
  import SectionHeader from '~/components/shared/section-header.vue'
  import ServiceItem from './service-item.vue'

  export default {
    components: {
      SectionHeader,
      ServiceItem
    },

    data: () => ({
      services
    })
  }
</script>

<style lang="css">
  .our-services {
    padding-top: 4rem;
    padding-bottom: 4rem;
  }

  .our-services .our-services__list {
    margin-top: 3rem;
  }
</style>
