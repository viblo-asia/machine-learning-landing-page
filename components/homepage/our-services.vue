<template>
  <section class="our-services py-sm-and-up-4 py-xs-only-2" id="dich-vu">
    <section-header title="Our services" :uppercase="true">
      Các dịch vụ chúng tôi đã và đang phát triển.
    </section-header>

    <el-row :gutter="20" class="mt-3">
      <el-col
        v-for="(service, index) in services"
        :key="index"
        :sm="12"
        :md="8">
        <service-item v-bind="service"/>
      </el-col>

      <el-col :sm="12" :md="8">
        <service-item
          name="More services later..."
          description="Ghé thăm thường xuyên để trải nghiệm những dịch vụ mới"
          faIcon="clone"/>
      </el-col>
    </el-row>
  </section>
</template>

<script>
  import services from '~/contents/service-items'
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
