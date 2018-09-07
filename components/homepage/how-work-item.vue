<template>
  <section class="how-work-item" :class="{ 'how-work-item--reverse': reverse }">
    <el-row type="flex">
      <el-col :xs="24" :sm="12" class="flex">
        <div class="how-work-item__main p-sm-and-up-3 px-xs-only-1">
          <section-header :title="title" :uppercase="true">
            <slot name="description"/>
          </section-header>

          <div class="mt-2">
            <slot/>
          </div>

          <nuxt-link :to="trialUrl" class="flex flex--center my-3 link">
            <el-button type="primary" plain>Dùng thử ngay!</el-button>
          </nuxt-link>
        </div>
      </el-col>

      <el-col :sm="12" class="hidden-xs-only">
        <div class="how-work-item__image" :style="`background-image: url(${image})`"/>
      </el-col>
    </el-row>
  </section>
</template>

<script>
  import SectionHeader from '~/components/shared/section-header.vue'

  export default {
    components: {
      SectionHeader
    },

    props: {
      title: String,
      description: String,
      image: String,
      reverse: Boolean,
      trialUrl: String
    }
  }
</script>

<style lang="scss">
  .how-work-item {
    &--reverse .el-row {
      flex-direction: row-reverse;
    }
    &__main {
      align-self: center;
    }
    &__image {
      height: 100%;
      background-size: cover;
      background-position: top center;
    }
    @media screen and (min-width: 1200px) {
      .el-col {
        min-height: 70vh;
      }
    }
  }
</style>
