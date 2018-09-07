<template>
  <div class="viblo-container">
    <section-header :uppercase="true" :title="service.name">
      {{ service.description }}
    </section-header>

    <el-row class="my-2" type="flex" justify="center">
      <el-col>
        <el-form :model="form" method="post" @submit.native.prevent="onSubmit">
          <el-form-item label="Nhập nội dung bài viết của bạn">
            <el-input
              v-model="form.document"
              :autosize="{ minRows: 6 }"
              type="textarea"
              @input="result = null"/>
          </el-form-item>

          <el-form-item label="Nội dung viết theo cú pháp markdown">
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
          <el-table-column prop="name" label="Ngôn ngữ"/>
          <el-table-column prop="langCode" label="Lang code"/>
          <el-table-column prop="distance" label="Độ chính xác"/>
        </el-table>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import { detectLanguage } from '~/api'
  import { languageDetection as service } from '~/contents/service-items'
  import SectionHeader from '~/components/shared/section-header.vue'
  import ElSwitch from 'element-ui/lib/switch'
  import 'element-ui/lib/theme-chalk/switch.css'

  const normalizeResult = (data) => data.reduce((result, item) => {
    const langCode = Object.keys(item)[0]
    const distance = item[langCode]
    result.push({ langCode, distance })
    return result
  }, [])

  export default {
    components: {
      SectionHeader,
      ElSwitch
    },

    data: () => ({
      service,
      processing: false,
      result: null,
      form: {
        document: '',
        is_markdown: true,
      }
    }),

    methods: {
      onSubmit() {
        this.processing = true
        return detectLanguage(this.form)
          .then(({ data, message }) => {
            this.$message.success(message)
            const languages = normalizeResult(data.data.result)
            this.result = { languages }
          })
          .catch(_ => this.$message.error('Something went wrong.'))
          .finally(() => this.processing = false)
      }
    }
  }
</script>
