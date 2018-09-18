<template>
  <section class="how-work-item" :class="{ 'how-work-item--reverse': reverse }">
    <el-row type="flex" align="middle">
      <el-col :xs="24" :sm="8" class="flex">
        <div class="how-work-item__main">
          <section-header
            :title="title"
            :underline="true"
            align="left">
            <slot name="description"/>
          </section-header>

          <div class="mt-2">
            <slot/>
          </div>

          <nuxt-link :to="trialUrl" class="flex flex--start my-3 link">
            <el-button type="primary" class="how-work-item__btn" round>Dùng thử ngay!</el-button>
          </nuxt-link>
        </div>
      </el-col>

      <el-col :sm="16" class="how-work-item__image flex flex--align-middle hidden-xs-only">
        <img :src="image" :alt="title"/>
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
    &__image {
      justify-content: flex-end;
    }

    &__btn {
      padding: 0.875rem 2rem !important;
    }

    &--reverse {
      .el-row {
        flex-direction: row-reverse;
      }

      .how-work-item__image {
        justify-content: flex-start;
      }
    }

    &__main {
      align-self: center;
    }

    @media screen and (min-width: 1200px) {
      .el-col {
        min-height: 70vh;
      }
    }
  }
</style>
