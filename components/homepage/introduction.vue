<template>
  <section id="gioi-thieu" class="pt-sm-and-up-3">
    <section-header :uppercase="true">
      <template slot="title">
        <h4 class="my-sm-and-up-2 my-xs-only-1">About us</h4>
      </template>

      <p>Blog kỹ thuật dành cho các lập trình viên Việt Nam</p>
    </section-header>

    <el-row :gutter="30" class="introduction__brand">
      <el-col
        v-for="(brand, index) in brands"
        :key="index"
        :sm="8">
        <div class="introduction__brand-item flex flex--center flex--column mt-3">
          <img
            :src="brand.image"
            :alt="brand.name"
            class="introduction__brand-item-image"/>
          <h3 class="introduction__brand-item-name">{{ brand.name }}</h3>
        </div>
      </el-col>
    </el-row>

    <el-row type="flex" justify="center" class="py-sm-and-up-2">
      <el-col class="introduction__contents px-sm-and-down-1" v-html="introduction"/>
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
  @import '~assets/sass/variables/fonts';

  .introduction {
    &__brand-item {
      &-image {
        height: 9.375rem;
        width: auto;
        @media screen and (max-width: 768px) {
          height: 6rem;
        }
      }
      &-name {
        font-size: 1.5rem;
        font-weight: $--fw-medium;
        color: $primary;
        max-width: 15rem;
        text-align: center;
        text-transform: capitalize;
        @media screen and (max-width: 768px) {
          font-size: 1.2rem;
        }
      }
    }

    &__contents {
      line-height: 2.3;
      text-align: justify;
    }
  }
</style>
