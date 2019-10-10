<template>
  <nav class="navigation flex flex--align-middle">
    <ul class="navigation__menu flex">
      <li
        v-for="(item, index) in menuItems"
        :key="index"
        class="navigation__item">
        <a
          v-scroll-on-click.prevent
          :href="url(`/#${item.sectionId}`, $store.state.locale)"
          :title="item.name"
          :data-scroll-target="`#${item.sectionId}`"
          class="navigation__link no-underline">
          {{ item.name }}
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
  import { url } from '~/utils/page'
  import jump from 'jump.js'
  import { findIndex } from 'lodash'

  export default {
    mounted() {
      const withoutHash = this.$route.hash.replace('#', '');
      if(this.$route.hash !== "" && findIndex(this.menuItems, ['sectionId', withoutHash]) !== -1) {
        jump(this.$route.hash, {
          duration: 0,
        })
      }
    },

    computed: {
      menuItems() {
        return [
          { name: this.$t('navigation.about.label'), sectionId: this.$t('navigation.about.section_id') },
          { name: this.$t('navigation.services.label'), sectionId: this.$t('navigation.services.section_id') },
          { name: this.$t('navigation.summary.label'), sectionId: this.$t('navigation.summary.section_id') },
        ]
      }
    },

    methods: {
      url
    }
  }
</script>

<style lang="scss">
  .navigation {
    justify-content: flex-end;

    &__menu {
      list-style: none;
      margin: 0;
    }

    &__item {
      -webkit-transition: background-color 0.3s ease-in-out;
      -moz-transition: background-color 0.3s ease-in-out;
      -ms-transition: background-color 0.3s ease-in-out;
      -o-transition: background-color 0.3s ease-in-out;
      transition: background-color 0.3s ease-in-out;
      &:hover {
        background: rgba(90, 90, 90, .3);
      }
    }

    &__link {
      color: #000000;
      display: block;
      font-size: inherit;
      padding: 0.625rem 1rem;
    }
  }
</style>
