import Vue from 'vue'

import locale from 'element-ui/lib/locale'
import english from 'element-ui/lib/locale/lang/en'

import Container from 'element-ui/lib/container'
import Header from 'element-ui/lib/header'
import Footer from 'element-ui/lib/footer'
import Main from 'element-ui/lib/main'
import Row from 'element-ui/lib/row'
import Col from 'element-ui/lib/col'

export default () => {
  locale.use(english)

  // Layout container:
  Vue.component('el-container', Container)
  Vue.component('el-header', Header)
  Vue.component('el-footer', Footer)
  Vue.component('el-main', Main)
  Vue.component('el-row', Row)
  Vue.component('el-col', Col)
}
