<template>
  <section :id="$t('navigation.summary.section_id')" class="how-work py-sm-and-up-4">
    <div class="how-work__header py-3">
      <section-header :uppercase="true">
        <template slot="title">
          <div class="how-work__header-title">{{ $t('home.how_work.title') }}</div>
        </template>
        <p
          v-html="$t('home.how_work.description')"
          class="how-work__header-description mt-xs-only-2"/>
      </section-header>
    </div>

    <div class="viblo-container mt-sm-and-up-4 mt-xs-only-1">
      <how-work-item
        v-for="(service, index) in services"
        :key="index"
        :title="service.name"
        :image="`/images/how-work/${service.key}.png`"
        :trial-url="serviceURL(service)"
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
  import { serviceURL } from '~/utils/page'
  import { getServices } from '~/contents/services'
  import SectionHeader from '~/components/shared/section-header.vue'
  import HowWorkItem from '~/components/homepage/how-work-item.vue'

  export default {
    components: {
      SectionHeader,
      HowWorkItem
    },

    data() {
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

