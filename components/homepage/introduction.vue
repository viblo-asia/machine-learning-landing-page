<template>
  <section id="gioi-thieu" class="pt-2">
    <section-header>
      <template slot="title">
        <h4 class="mb-2">About us</h4>
      </template>

      <p>Blog kỹ thuật dành cho các lập trình viên Việt Nam</p>
    </section-header>

    <el-row :gutter="30" class="introduction__brand mt-5">
      <el-col
        v-for="(brand, index) in brands"
        :key="index"
        :sm="8">
        <div class="introduction__brand-item flex flex--center flex--column">
          <img
            :src="brand.image"
            :alt="brand.name"
            class="introduction__brand-item-image"/>
          <h3 class="introduction__brand-item-name">{{ brand.name }}</h3>
        </div>
      </el-col>
    </el-row>

    <el-row type="flex" justify="center" class="py-sm-and-up-2">
      <el-col class="introduction__contents" v-html="introduction"/>
    </el-row>
  </section>
</template>

<script>
  import SectionHeader from '~/components/shared/section-header.vue'
  import { brands, introduction } from '~/contents/introductions'

  export default {
    components: {
      SectionHeader
    },

    data: () => ({ brands, introduction })
  }
</script>

<style lang="scss">
  @import '~assets/sass/variables/colors';

  .introduction {
    &__brand-item {
      &-image {
        height: 9.375rem;
        width: auto;
      }
      &-name {
        font-size: 1.5rem;
        font-weight: 500;
        color: $primary;
        max-width: 15rem;
        text-align: center;
        text-transform: capitalize;
      }
    }

    &__contents {
      line-height: 2.3;
      text-align: justify;
    }
  }
</style>
