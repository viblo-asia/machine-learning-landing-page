import Vue from 'vue'
import ProgressiveLoading from '~/directives/progressive-loading'
import ScrollOnClick from '~/directives/scroll-on-click'

export default () => {
  Vue.directive('progressive-loading', ProgressiveLoading)
  Vue.directive('scroll-on-click', ScrollOnClick)
}
