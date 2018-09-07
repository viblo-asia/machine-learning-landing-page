<template>
  <section class="how-work-item" :class="{ 'how-work-item--reverse': reverse }">
    <el-row type="flex">
      <el-col :md="12" class="flex">
        <div class="how-work-item__main p-3">
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

      <el-col :md="12">
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
    .el-col {
      min-height: 70vh;
    }
    &__image {
      height: 100%;
      background-size: cover;
      background-position: top center;
    }
  }
</style>
