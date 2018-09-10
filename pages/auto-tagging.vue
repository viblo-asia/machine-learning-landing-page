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
        <section-header title="Danh sách gợi ý" size="small" type="info"/>
        <tags-list :tags="result.tags_recommend" class="mt-2">
          <el-table-column
            prop="number_posts"
            label="Tổng số bài viết"
            width="150"
            align="center"/>
        </tags-list>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import { autoTagging } from '~/api'
  import { autoTagging as service } from '~/contents/service-items'
  import SectionHeader from '~/components/shared/section-header.vue'
  import TagsList from '~/components/shared/tags-list.vue'

  export default {
    components: {
      SectionHeader,
      TagsList,
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
        return autoTagging(this.form)
          .then(({ data }) => this.result = data.data)
          .catch(_ => this.$message.error('Something went wrong.'))
          .finally(() => this.processing = false)
      }
    }
  }
</script>
