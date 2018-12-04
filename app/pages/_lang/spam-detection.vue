<template>
  <demo-service-page :service="service" :show-form="!result" :processing="processing">
    <el-form slot="form" :model="form">
      <el-form-item :label="$t('form.labels.enter_your_document')">
        <el-input
          v-model="form.document"
          :autosize="{ minRows: 6 }"
          type="textarea"
          @input="result = null"/>
      </el-form-item>

      <el-form-item :label="$t('form.labels.enable_markdown_syntax')">
        <el-switch v-model="form.is_markdown"/>
      </el-form-item>

      <el-form-item class="flex flex--center">
        <el-button
          :disabled="!form.document"
          :loading="processing"
          type="primary"
          @click="onSubmit">
          Submit
        </el-button>
      </el-form-item>
    </el-form>

    <div slot="result">
      <el-alert
        :closable="false"
        :type="isSpam ? 'warning' : 'success'"
        style="max-width: 40rem"
        title
        show-icon>
        <span v-if="isSpam" v-html="$t('form.messages.is_spam')"/>
        <span v-else v-html="$t('form.messages.is_not_spam', { type: result })"/>
      </el-alert>

      <btn-try-again @click="result = null"/>
    </div>
  </demo-service-page>
</template>

<script>
  import { detectSpam } from '~/api'
  import { servicePage } from '~/utils/page'
  import { getServiceItem } from '~/contents/services'
  import * as formDefault from '~/contents/form-default/auto-tagging'
  import SectionHeader from '~/components/shared/section-header.vue'

  export default {
    components: {
      SectionHeader
    },

    data() {
      return {
        service: getServiceItem(this, 'spam_detection'),
        processing: false,
        result: null,
        form: Object.assign({}, formDefault)
      }
    },

    computed: {
      isSpam() {
        return this.result === 'Non-IT'
      }
    },

    methods: {
      onSubmit() {
        this.processing = true
        return detectSpam(this.form)
          .then(({ data }) => this.result = data.data.document_type)
          .catch(_ => this.$message.error(this.$t('errors.something_wrong')))
          .finally(() => this.processing = false)
      }
    },

    head() {
      return servicePage(this.service)
    }
  }
</script>
