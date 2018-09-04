<template>
  <el-container class="viblo-app">
    <el-header height="auto">
      <div class="viblo-container">
        <Header/>
      </div>
    </el-header>

    <el-main>
      <nuxt/>
    </el-main>

    <el-footer height="auto" class="footer-bg">
      <div class="viblo-container">
        <Footer/>
      </div>
    </el-footer>
  </el-container>
</template>

<script>
  import Header from '~/components/site/header.vue'
  import Footer from '~/components/site/footer.vue'

  export default {
    components: {
      Header,
      Footer
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
