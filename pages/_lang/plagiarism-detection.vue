<template>
  <div class="viblo-container">
    <section-header :underline="true" :title="service.name">
      {{ service.description }}
    </section-header>

    <el-row v-if="!result" class="my-2">
      <el-col>
        <el-form :model="form">
          <el-form-item :label="$t('form.labels.enter_your_document')">
            <el-input
              v-model="form.document"
              :autosize="{ minRows: 6 }"
              type="textarea"/>
          </el-form-item>

          <el-form-item class="flex flex--center">
            <el-button
              :disabled="!form.document"
              :loading="processing"
              type="primary"
              @click="submit(form)">
              Submit
            </el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>

    <el-row v-else-if="!processing" id="result" class="mb-3">
      <section-header :underline="false" size="small" title="Result"/>

      <el-col>
        <div v-if="result.length">
          <plagiarism-result :result="result"/>
          <div class="flex flex--justify-center">
            <el-button type="primary" class="mt-2" @click="result = null">
              Click to try another document
            </el-button>
          </div>
        </div>

        <el-alert v-else :closable="false" type="warning" title>
          Your document is not plagiarism.
        </el-alert>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import { getServiceItem } from '~/contents/services'
  import { detectPlagiarism } from '~/api'
  import { fetchPost } from '~/api/posts'
  import { document } from '~/contents/form-default/auto-tagging'

  import SectionHeader from '~/components/shared/section-header.vue'
  import PlagiarismResult from '~/components/tables/plagiarism-result.vue'

  export default {
    components: {
      SectionHeader,
      PlagiarismResult
    },

    data() {
      return {
        service: getServiceItem(this, 'plagiarism_detection'),
        processing: false,
        result: null,
        form: { document }
      }
    },

    watchQuery: [
      'url',
    ],

    beforeMount() {
      this.performAutoFill(this.$route.query)
    },

    methods: {
      async performAutoFill(query) {
        try {
          const vibloUrlRegex = /^http[s]?:\/\/viblo.asia\/p\/([a-zA-Z0-9_-]*[a-zA-Z0-9]{10,})\/?$/
          const matched = query.url ? query.url.match(vibloUrlRegex) : null
          const hashId = matched ? matched[1].split('-').pop() : null

          if (!hashId) return

          const { data: { contents } } = await fetchPost(hashId)

          this.form.document = contents

          await this.submit(this.form)
        } catch (e) {
          console.warn(`Can not fetch post from URL.`)
        }
      },

      async submit(form) {
        try {
          this.processing = true
          const { data: { data } } = await detectPlagiarism(form)
          this.result = data.result
        } finally {
          this.processing = false
        }
      }
    }
  }
</script>
