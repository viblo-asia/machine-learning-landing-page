<template>
  <el-container class="viblo-app">
    <el-header ref="stickyHeader" height="auto" class="el-header--sticky">
      <div class="viblo-container">
        <app-header/>
      </div>
    </el-header>

    <el-main>
      <nuxt/>
    </el-main>

    <el-footer height="auto" class="footer-bg">
      <div class="viblo-container">
        <app-footer/>
      </div>
    </el-footer>
  </el-container>
</template>

<script>
  import AppHeader from '~/components/site/header.vue'
  import AppFooter from '~/components/site/footer.vue'

  export default {
    components: {
      AppHeader,
      AppFooter
    },

    mounted() {
      this.dockedHeader()
      window.addEventListener('scroll', this.dockedHeader)
    },

    beforeDestroy() {
      window.removeEventListener('scroll', this.dockedHeader)
    },

    methods: {
      dockedHeader() {
        const stickyHeader = this.$refs.stickyHeader.$el
        const isDocked = stickyHeader.classList.contains('el-header--docked')
        const pageYOffset = window.pageYOffset

        if (!isDocked && pageYOffset >= 20) {
          stickyHeader.classList.add('el-header--docked')
        } else if (isDocked && pageYOffset < 20) {
          stickyHeader.classList.remove('el-header--docked')
        }
      }
    }
  }
</script>

<style lang="scss">
  @import '~assets/sass/variables/layout';

  .viblo-app {
    .el-header {
      &--sticky {
        background: #ffffff;
        position: sticky;
        top: 0;
        -webkit-transition: all 0.3s ease-in-out;
        -moz-transition: all 0.3s ease-in-out;
        -ms-transition: all 0.3s ease-in-out;
        -o-transition: all 0.3s ease-in-out;
        transition: all 0.3s ease-in-out;
        width: 100%;
        z-index: 1000;
      }

      &--docked {
        -webkit-box-shadow: 0 4px 4px 0 rgba(0, 0, 0, .1);
        -moz-box-shadow: 0 4px 4px 0 rgba(0, 0, 0, .1);
        box-shadow: 0 4px 4px 0 rgba(0, 0, 0, .1);
      }
    }
  }
</style>
