<template>
  <demo-service-page :service="service" :show-form="!result" :processing="processing">
    <el-form slot="form" :model="form">
      <el-form-item :label="$t('form.labels.enter_your_code')">
        <el-input
          v-model="form.content"
          :autosize="{ minRows: 6 }"
          type="textarea"
          @input="result = null"/>
      </el-form-item>

      <el-form-item class="flex flex--center">
        <el-button
          :disabled="!form.content"
          :loading="processing"
          type="primary"
          @click="onSubmit">
          Submit
        </el-button>
      </el-form-item>
    </el-form>

    <div slot="result" style="max-width: 40rem">
      <el-alert :closable="false" type="success" title show-icon>
        <span class="mr-1">{{ $t('form.labels.detected_programming_language') }}:</span>
        <strong
          v-for="(item, index) in result"
          :key="index"
        >
          {{item.language}}
        </strong>
      </el-alert>

      <btn-try-again @click="result = null"/>
    </div>
  </demo-service-page>
</template>

<script>
  import { detectCode } from '~/api'
  import { servicePage } from '~/utils/page'
  import { getServiceItem } from '~/contents/services'
import * as formDefault from '~/contents/form-default/programming-language-detection'

  export default {
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
          .then(({ data }) => this.result = data.code)
          .catch(_ => this.$message.error(this.$t('errors.something_wrong')))
          .finally(() => this.processing = false)
      }
    },

    head() {
      return servicePage(this.service)
    }
  }
</script>
