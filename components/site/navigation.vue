<template>
  <nav class="navigation flex flex--align-middle">
    <ul class="navigation__menu flex">
      <li
        v-for="(item, index) in menuItems"
        :key="index"
        class="navigation__item">
        <a
          :href="item.url"
          :title="item.name"
          class="navigation__link no-underline">
          {{ item.name }}
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
  export default {
    data: () => ({
      menuItems: [
        { name: 'Giới thiệu', url: '#gioi-thieu' },
        { name: 'Dịch vụ', url: '#dich-vu' },
        { name: 'Tổng quan', url: '#tong-quan' },
      ]
    })
  }
</script>

<style lang="scss">
  .navigation {
    justify-content: flex-end;

    &__menu {
      list-style: none;
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
