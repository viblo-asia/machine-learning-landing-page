<template>
  <div class="header">
    <el-row type="flex" justify="space-between" align="middle">
      <el-col>
        <logo-wrap class="my-1"/>
      </el-col>

      <el-col class="hidden-xs-only">
        <navigation/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import LogoWrap from './logo-wrap.vue'
  import Navigation from './navigation.vue'

  export default {
    components: {
      LogoWrap,
      Navigation
    }
  }
</script>
