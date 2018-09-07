<template>
  <div class="viblo-container">
    <section-header :uppercase="true" :title="service.name">
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
        <el-alert :closable="false" type="info" title="" class="result">
          <span v-if="isSpam">It is a <strong>spam</strong>. Your document type of {{ result }}.</span>
          <span v-else>Your document type of {{ result }}. It is <strong>not</strong> a spam.</span>
        </el-alert>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import { detectSpam } from '~/api'
  import { spamDetection as service } from '~/contents/service-items'
  import SectionHeader from '~/components/shared/section-header.vue'

  export default {
    components: {
      SectionHeader
    },

    data: () => ({
      service,
      processing: false,
      result: null,
      form: {
        document: '',
      }
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
    }
  }
</script>

<style lang="css">
  .result strong {
    text-transform: uppercase;
  }
</style>
