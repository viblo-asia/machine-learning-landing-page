<template>
  <div class="viblo-container">
    <section-header :underline="true" :title="service.name">
      {{ service.description }}
    </section-header>

    <el-row class="my-2">
      <el-col>
        <el-form :model="form">
          <el-form-item label="Nhập nội dung bài viết cần kiểm tra spam">
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
      <el-col :span="12">
        <el-alert
          :closable="false"
          :type="isSpam ? 'warning' : 'success'"
          class="result"
          title=""
          show-icon>
          <span v-if="isSpam">Bài viết của bạn bị đánh giá là <strong>SPAM</strong>.</span>
          <span v-else>Bài viết của bạn thuộc phân loại: <strong>{{ result }}</strong>.</span>
        </el-alert>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import { detectSpam } from '~/api'
  import { pageSEO } from '~/utils/seo'
  import { spamDetection as service } from '~/contents/service-items'
  import * as formDefault from '~/contents/form-default/auto-tagging'
  import SectionHeader from '~/components/shared/section-header.vue'

  export default {
    components: {
      SectionHeader
    },

    data: () => ({
      service,
      processing: false,
      result: null,
      form: Object.assign({}, formDefault)
    }),

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
          .catch(_ => this.$message.error('Something went wrong.'))
          .finally(() => this.processing = false)
      }
    },

    head: () => ({
      title: `${service.name} service - Viblo Machine Learning`,
      meta: pageSEO({
        title: `${service.name} service - Viblo Machine Learning`,
        description: service.description
      }),
    })
  }
</script>

<style lang="css">
  .result strong {
    text-transform: uppercase;
  }
</style>
