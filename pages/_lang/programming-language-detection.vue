<template>
  <div class="viblo-container">
    <section-header :title="service.name" :underline="true">
      {{ service.description }}
    </section-header>

    <el-row class="my-2">
      <el-col>
        <el-form :model="form">
          <el-form-item :label="$t('form.labels.enter_your_code')">
            <el-input
              v-model="form.code"
              :autosize="{ minRows: 6 }"
              type="textarea"
              @input="result = null"/>
          </el-form-item>

          <el-form-item class="flex flex--center">
            <el-button
              :disabled="!form.code"
              :loading="processing"
              type="primary"
              @click="onSubmit">
              Submit
            </el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>

    <el-row v-if="result" type="flex" justify="center">
      <el-col :span="12">
        <el-alert :closable="false" type="info" title="">
          <span class="mr-1">{{ $t('form.labels.detected_programming_language') }}}:</span>
          <strong>{{ result }}</strong>
        </el-alert>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import { detectCode } from '~/api'
  import { servicePage } from '~/utils/page'
  import { getServiceItem } from '~/contents/services'
  import * as formDefault from '~/contents/form-default/programming-language-detection'
  import SectionHeader from '~/components/shared/section-header.vue'

  export default {
    components: {
      SectionHeader
    },

    data() {
      return {
        service: getServiceItem(this, 'programming_language_detection'),
        processing: false,
        result: null,
        form: Object.assign({}, formDefault)
      }
    },

    methods: {
      onSubmit() {
        this.processing = true
        return detectCode(this.form)
          .then(({ data }) => this.result = data.data.programming_language)
          .catch(_ => this.$message.error(this.$t('errors.something_wrong')))
          .finally(() => this.processing = false)
      }
    },

    head() {
      return servicePage(this.service)
    }
  }
</script>
