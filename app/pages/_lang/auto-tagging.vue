<template>
  <demo-service-page :service="service" :show-form="!result" :processing="processing" result-class>
    <el-form slot="form" :model="form" method="post" @submit.native.prevent="onSubmit">
      <el-form-item :label="$t('form.labels.enter_your_document')">
        <el-input
          v-model="form.content"
          :autosize="{ minRows: 6 }"
          type="textarea"
          @input="result = null"/>
      </el-form-item>

      <el-form-item class="flex flex--center">
        <el-button
          :disabled="!form.content"
          :loading="processing"
          type="primary"
          @click="onSubmit">
          Submit
        </el-button>
      </el-form-item>
    </el-form>

    <div slot="result">
      <el-row>
        <el-col>
          <section-header :title="$t('form.labels.suggestions')" size="small"/>
          <tags-list :tags="result ? result : []"/>
          <btn-try-again @click="result = null"/>
        </el-col>
      </el-row>
    </div>

  </demo-service-page>
</template>

<script>
  import { autoTagging } from '~/api'
  import { servicePage } from '~/utils/page'
  import { getServiceItem } from '~/contents/services'
  import * as formDefault from '~/contents/form-default/auto-tagging'
  import TagsList from '~/components/shared/tags-list.vue'

  export default {
    components: {
      TagsList,
    },

    data () {
      return {
        service: getServiceItem(this, 'auto_tagging'),
        processing: false,
        result: null,
        form: Object.assign({}, formDefault)
      }
    },

    methods: {
      onSubmit () {
        this.processing = true
        return autoTagging(this.form)
          .then(({ data }) => this.result = data.list_tag_predict)
          .catch(_ => this.$message.error(this.$t('errors.something_wrong')))
          .finally(() => this.processing = false)
      }
    },

    head () {
      return servicePage(this.service)
    }
  }
</script>
