<template>
  <div class="viblo-container">
    <SectionHeader :uppercase="true" title="Programming language detect"/>

    <el-row class="my-2">
      <el-col>
        <el-form :model="form">
          <el-form-item label="Enter your code">
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
          <span class="mr-1">Programming language detected:</span>
          <strong>{{ result }}</strong>
        </el-alert>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import { detectCode } from '~/api'
  import SectionHeader from '~/components/shared/section-header.vue'

  export default {
    components: {
      SectionHeader
    },

    data: () => ({
      processing: false,
      result: null,
      form: {
        code: '',
      }
    }),

    methods: {
      onSubmit() {
        return detectCode(this.form)
          .then(({ data, message }) => {
            this.$message.success(message)
            this.result = data.data.programming_language
          })
          .catch(_ => this.$message.error('Something went wrong.'))
          .finally(() => this.processing = false)
      }
    }
  }
</script>
