<template>
  <demo-service-page
    :service="service"
    :show-form="!result"
    :processing="processing"
    result-class>
    <el-form slot="form" :model="form">
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

    <el-row slot="result">
      <section-header :underline="false" size="small" title="Matched posts">
        The posts are matched with your document.
      </section-header>

      <el-col>
        <div v-if="result && result.length">
          <plagiarism-result :result="result || []"/>

          <btn-try-again @click="result = null"/>
        </div>

        <el-alert
          v-else
          :closable="false"
          type="warning"
          class="mt-2"
          title
          show-icon>
          Your document is not plagiarism.
        </el-alert>
      </el-col>
    </el-row>
  </demo-service-page>
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
