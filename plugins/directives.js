import Vue from 'vue'
import ProgressiveLoading from '~/directives/progressive-loading'

export default () => {
  Vue.directive('progressive-loading', ProgressiveLoading)
}
