import Vue from 'vue'

import { percentFormat } from '~/filters/number-format'

Vue.filter('percentFormat', percentFormat)
