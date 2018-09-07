<template>
  <div class="viblo-container">
    <section-header :uppercase="true" :title="service.name">
      {{ service.description }}
    </section-header>

    <el-row class="my-2" type="flex" justify="center">
      <el-col :md="12">
        <el-form :model="form" method="post" @submit.native.prevent="onSubmit">
          <el-form-item label="Nhập tên tag mà bạn muốn so sánh để tìm ra những tag tương tự">
            <el-input v-model="form.tag" @input="result = null"/>
          </el-form-item>

          <el-form-item class="flex flex--center">
            <el-button
              :disabled="!form.tag"
              :loading="processing"
              type="primary"
              @click="onSubmit">
              Submit
            </el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>

    <el-row v-if="result" :gutter="30" type="flex" justify="center">
      <el-col :span="12">
        <section-header title="Tags cùng tên" size="small" type="info"/>
        <tags-list :tags="result.tags_same_words" class="mt-2"/>
      </el-col>
      <el-col :span="12">
        <section-header title="Tags đồng nghĩa" size="small" type="info"/>
        <tags-list :tags="result.tags_same_meaning" class="mt-2">
          <el-table-column
            prop="distance"
            label="Độ chính xác"
            width="150"
            align="center"
            :formatter="(row, column, cellValue) => Math.round(cellValue*10000)/10000"/>
        </tags-list>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import { tagCompare } from '~/api'
  import { tagCompare as service } from '~/contents/service-items'
  import SectionHeader from '~/components/shared/section-header.vue'
  import TagsList from '~/components/shared/tags-list.vue'

  export default {
    components: {
      SectionHeader,
      TagsList
    },

    data: () => ({
      service,
      processing: false,
      result: null,
      form: {
        tag: '',
      }
    }),

    methods: {
      onSubmit() {
        this.processing = true
        return tagCompare(this.form)
          .then(({ data }) => this.result = data.data)
          .catch(_ => this.$message.error('Something went wrong.'))
          .finally(() => this.processing = false)
      }
    }
  }
</script>
