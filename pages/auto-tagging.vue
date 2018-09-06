<template>
  <div class="viblo-container">
    <section-header :uppercase="true" title="Auto tagging">
      Tự động gợi ý tag cho bài viết dựa trên nội dung bài
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
        <section-header title="Danh sách gợi ý" size="small" type="info"/>
        <tags-list :tags="result.tags_recommend" class="mt-2"/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import { autoTagging } from '~/api'
  import SectionHeader from '~/components/shared/section-header.vue'
  import TagsList from '~/components/shared/tags-list.vue'
  import ElSwitch from 'element-ui/lib/switch'
  import 'element-ui/lib/theme-chalk/switch.css'

  export default {
    components: {
      SectionHeader,
      TagsList,
      ElSwitch
    },

    data: () => ({
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
        return autoTagging(this.form)
          .then(({ data, message }) => {
            this.$message.success(message)
            this.result = data.data
          })
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
