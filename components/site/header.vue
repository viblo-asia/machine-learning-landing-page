<template>
  <div class="header py-05">
    <el-row type="flex" justify="space-between" align="middle">
      <el-col :xs="14" :sm="7">
        <logo-wrap/>
      </el-col>

      <el-col :xs="10" :sm="17" class="flex flex--align-middle flex--justify-end">
        <navigation class="hidden-xs-only mr-2"/>
        <language-switcher/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import LogoWrap from './logo-wrap.vue'
  import Navigation from './navigation.vue'
  import LanguageSwitcher from '~/components/site/language-switcher.vue'

  export default {
    components: {
      LogoWrap,
      Navigation,
      LanguageSwitcher
    }
  }
</script>
