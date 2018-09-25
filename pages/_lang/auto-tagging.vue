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
        <section-header :title="$t('form.labels.suggestions')" size="small" type="info"/>
        <tags-list :tags="result.tags_recommend" class="mt-2">
          <el-table-column
            :label="$t('total_posts')"
            prop="number_posts"
            width="150"
            align="center"/>
        </tags-list>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import { autoTagging } from '~/api'
  import { servicePage } from '~/utils/page'
  import { getServiceItem } from '~/contents/services'
  import * as formDefault from '~/contents/form-default/auto-tagging'
  import SectionHeader from '~/components/shared/section-header.vue'
  import TagsList from '~/components/shared/tags-list.vue'

  export default {
    components: {
      SectionHeader,
      TagsList,
    },

    data() {
      return {
        service: getServiceItem(this, 'auto_tagging'),
        processing: false,
        result: null,
        form: Object.assign({}, formDefault)
      }
    },

    methods: {
      onSubmit() {
        this.processing = true
        return autoTagging(this.form)
          .then(({ data }) => this.result = data.data)
          .catch(_ => this.$message.error(this.$t('errors.something_wrong')))
          .finally(() => this.processing = false)
      }
    },

    head() {
      return servicePage(this.service)
    }
  }
</script>
