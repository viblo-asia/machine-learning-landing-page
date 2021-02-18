<template>
  <demo-service-page :service="service" :show-form="!result" :processing="processing">
    <el-form slot="form" :model="form">
      <el-form-item :label="$t('form.labels.enter_your_document')">
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

    <div slot="result">
      <el-alert
        :closable="false"
        :type="isGoogleTranslate ? 'warning' : 'success'"
        style="max-width: 40rem"
        title
        show-icon>
        <span v-if="isGoogleTranslate" v-html="$t('form.messages.is_google_translate')"/>
        <span v-else v-html="$t('form.messages.is_not_google_translate', { type: result })"/>
      </el-alert>

      <btn-try-again @click="result = null"/>
    </div>
  </demo-service-page>
</template>

<script>
  import { detectGoogleTranslate } from '~/api'
  import { servicePage } from '~/utils/page'
  import { getServiceItem } from '~/contents/services'
  import * as formDefault from '~/contents/form-default/google-translate-detection'
  import SectionHeader from '~/components/shared/section-header.vue'

  export default {
    components: {
      SectionHeader
    },

    data() {
      return {
        service: getServiceItem(this, 'google_translate_detection'),
        processing: false,
        result: null,
        form: Object.assign({
          post_id: 0
        }, formDefault)
      }
    },

    computed: {
      isGoogleTranslate() {
        return this.result === 'google_translate'
      }
    },

    methods: {
      onSubmit() {
        this.processing = true
        return detectGoogleTranslate(this.form)
          .then(({ data }) => this.result = data.status)
          .catch(_ => this.$message.error(this.$t('errors.something_wrong')))
          .finally(() => this.processing = false)
      }
    },

    head() {
      return servicePage(this.service)
    }
  }
</script>
