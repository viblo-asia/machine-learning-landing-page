<template>
  <div class="header">
    <el-row :gutter="10" type="flex" justify="space-between" align="middle">
      <el-col>
        <logo-wrap/>
      </el-col>

      <el-col>
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
