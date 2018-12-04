<template>
  <demo-service-page :service="service" :show-form="!result" :processing="processing" result-class>
    <el-form slot="form" :model="form" method="post" @submit.native.prevent="onSubmit">
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
      <section-header :title="$t('form.labels.result')" size="small"/>

      <el-table :data="result ? result.languages : []">
        <el-table-column type="index" label="#"/>
        <el-table-column prop="name" :label="$t('form.labels.language')"/>
        <el-table-column prop="langCode" :label="$t('form.labels.lang_code')"/>
        <el-table-column prop="distance" :label="$t('form.labels.exact') + ' (%)'">
          <template slot-scope="data">{{ data.row.distance | percentFormat }}</template>
        </el-table-column>
      </el-table>

      <btn-try-again @click="result = null"/>
    </div>
  </demo-service-page>
</template>

<script>
  import { detectLanguage } from '~/api'
  import { servicePage } from '~/utils/page'
  import { getServiceItem } from '~/contents/services'
  import * as formDefault from '~/contents/form-default/auto-tagging'
  import ISO6391 from 'iso-639-1'
  import _transform from 'lodash.transform'

  const normalizeResult = (data) => _transform(data, (result, item) => {
    const langCode = Object.keys(item)[0]
    const name = ISO6391.getName(langCode)
    const distance = item[langCode]

    result.push({ langCode, distance, name })
  }, [])

  export default {
    data () {
      return {
        service: getServiceItem(this, 'language_detection'),
        processing: false,
        result: null,
        form: Object.assign({}, formDefault)
      }
    },

    methods: {
      onSubmit () {
        this.processing = true
        return detectLanguage(this.form)
          .then(({ data }) => {
            const languages = normalizeResult(data.data.result)
            this.result = { languages }
          })
          .catch(_ => this.$message.error(this.$t('errors.something_wrong')))
          .finally(() => this.processing = false)
      }
    },

    head () {
      return servicePage(this.service)
    }
  }
</script>
