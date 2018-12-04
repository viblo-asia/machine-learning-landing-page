<template>
  <section
    :id="$t('navigation.services.section_id')"
    class="our-services py-sm-and-up-5 py-xs-only-2 px-sm-and-down-1">
    <section-header :title="$t('home.our_services.title')" :uppercase="true">
      {{ $t('home.our_services.description') }}
    </section-header>

    <el-row :gutter="20" class="mt-3">
      <el-col
        v-for="(service, index) in services"
        :key="index"
        :sm="12"
        :md="8">
        <service-item
          :name="service.name"
          :description="service.description"
          :image="`/images/our-services/${service.key}.png`"
          :url="serviceURL(service)"/>
      </el-col>

      <el-col :sm="12" :md="8">
        <service-item
          :name="$t('services.more.name')"
          :description="$t('services.more.description')"
          image="/images/our-services/more.png"/>
      </el-col>
    </el-row>
  </section>
</template>

<script>
  import { serviceURL } from '~/utils/page'
  import { getServices } from '~/contents/services'
  import SectionHeader from '~/components/shared/section-header.vue'
  import ServiceItem from './service-item.vue'

  export default {
    components: {
      SectionHeader,
      ServiceItem
    },

    data () {
      return {
        services: getServices(this)
      }
    },

    methods: {
      serviceURL(service) {
        return service.trialEnabled
          ? serviceURL(service.key, this.$store.state.locale)
          : undefined
      }
    }
  }
</script>
