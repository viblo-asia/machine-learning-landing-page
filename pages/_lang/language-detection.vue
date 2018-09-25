<template>
  <div class="viblo-container">
    <section-header :underline="true" :title="service.name">
      {{ service.description }}
    </section-header>

    <el-row class="my-2" type="flex" justify="center">
      <el-col>
        <el-form :model="form" method="post" @submit.native.prevent="onSubmit">
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
      </el-col>
    </el-row>

    <el-row v-if="result" type="flex" justify="center">
      <el-col :md="12">
        <section-header title="Kết quả" size="small" type="info"/>

        <el-table :data="result.languages" class="mt-2">
          <el-table-column prop="name" :label="$t('form.labels.language')"/>
          <el-table-column prop="langCode" :label="$t('form.labels.lang_code')"/>
          <el-table-column prop="distance" :label="$t('form.labels.exact')"/>
        </el-table>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import { detectLanguage } from '~/api'
  import { servicePage } from '~/utils/page'
  import { getServiceItem } from '~/contents/services'
  import * as formDefault from '~/contents/form-default/auto-tagging'
  import SectionHeader from '~/components/shared/section-header.vue'

  const normalizeResult = (data) => data.reduce((result, item) => {
    const langCode = Object.keys(item)[0]
    const distance = item[langCode]
    result.push({ langCode, distance })
    return result
  }, [])

  export default {
    components: {
      SectionHeader,
    },

    data() {
      return {
        service: getServiceItem(this, 'language_detection'),
        processing: false,
        result: null,
        form: Object.assign({}, formDefault)
      }
    },

    methods: {
      onSubmit() {
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

    head() {
      return servicePage(this.service)
    }
  }
</script>
