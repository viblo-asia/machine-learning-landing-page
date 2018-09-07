<template>
  <el-container class="viblo-app">
    <el-header height="auto">
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
    }
  }
</script>

<style lang="css">
  .viblo-app {
    min-height: 100vh;
  }

  .viblo-container {
    max-width: 1340px;
    margin-left: auto;
    margin-right: auto;
  }
</style>
