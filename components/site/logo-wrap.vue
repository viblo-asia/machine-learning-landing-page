<script>
  import { url } from '~/utils/page'

  export default {
    functional: true,

    props: {
      locale: {
        type: String,
        required: true
      }
    },

    render: (h, { props: { locale } }) => (
      <nuxt-link to={url('/', locale)} class="logo-wrap no-underline">
        <img
          src="https://viblo.asia/logo_full.svg"
          alt="Viblo machine learning service"
          class="logo-wrap__image"/>

        <span class="logo-wrap__name">Machine learning</span>
      </nuxt-link>
    )
  }
</script>

<style lang="scss">
  @import '~assets/sass/variables/colors';
  @import '~element-ui/packages/theme-chalk/src/mixins/mixins';

  .logo-wrap {
    align-items: center;
    display: inline-flex;
    padding-top: 0.625rem;
    padding-bottom: 0.625rem;
    &__image {
      width: 75px;
    }
    &__name {
      color: $primary;
      font-size: 0.9375rem;
      font-weight: 700;
      margin-left: 0.625rem;
      text-transform: uppercase;
    }

    @media screen and (max-width: 320px) {
      &__image {
        width: 60px;
      }
    }
    @media screen and (max-width: 888px) {
      &__name {
        font-size: 0.735rem;
      }
    }
  }
</style>
