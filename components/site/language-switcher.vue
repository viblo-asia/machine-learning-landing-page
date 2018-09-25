<template>
  <el-dropdown trigger="click">
    <span class="el-dropdown-link">
      {{ currentLanguage }} <i class="el-icon-arrow-down el-icon--right"></i>
    </span>

    <el-dropdown-menu slot="dropdown" class="lang-dropdown">
      <el-dropdown-item v-for="(locale, index) in locales" :key="index">
        <el-button type="text" @click="() => changeLanguage(locale.code)">
          {{ locale.name }}
        </el-button>
      </el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
  const locales = [
    { code: 'en-US', name: 'English' },
    { code: 'vi-VN', name: 'Tiếng Việt' },
  ]

  export default {
    data: () => ({ locales }),

    computed: {
      currentLanguage() {
        const locale = locales.find((locale) => locale.code === this.$store.state.locale)
        return locale ? locale.name : 'Unknown'
      }
    },

    methods: {
      changeLanguage(newLocale) {
        if (newLocale === this.$store.state.locale) return

        const currentLocale = this.$store.state.locale
        const nextPath = this.$route.path.replace(currentLocale, newLocale)
        const page = nextPath.startsWith(`/${newLocale}`) ? nextPath : `/${newLocale}${nextPath}`

        this.$router.push(page)
      }
    }
  }
</script>

<style lang="scss">
  @import '~assets/sass/variables/colors';

  .el-dropdown-link {
    font-family: inherit;
    font-weight: inherit;
    font-size: 1rem;
    color: rgb(0,0,0)
  }

  .el-dropdown-link:hover {
    cursor: pointer;
    color: $primary;
  }

  .lang-dropdown .el-button {
    color: inherit;
    font-size: 1rem;
  }
</style>

