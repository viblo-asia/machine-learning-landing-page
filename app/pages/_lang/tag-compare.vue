<template>
  <demo-service-page :service="service" :show-form="!result" :processing="processing">
    <el-row slot="form" type="flex" justify="center">
      <el-col :md="12">
        <el-form :model="form" method="post" @submit.native.prevent="onSubmit">
          <el-form-item :label="$t('form.labels.enter_your_tag')">
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

    <div slot="result">
      <el-row>
        <el-col>
          <section-header :title="$t('form.labels.tag_same_words')" size="small"/>
          <tags-list :tags="result ? result.tags_same_words : []">
            <el-table-column
              prop="distance"
              :label="$t('form.labels.exact') + ' (%)'"
              width="150"
              align="center">
              <template slot-scope="data">{{ data.row.distance | percentFormat }}</template>
            </el-table-column>
          </tags-list>
          <btn-try-again @click="result = null"/>
        </el-col>

        <el-col class="my-3">
          <section-header :title="$t('form.labels.tag_same_meaning')" size="small"/>
          <tags-list :tags="result ? result.tags_same_meaning : []">
            <el-table-column
              prop="distance"
              :label="$t('form.labels.exact') + ' (%)'"
              width="150"
              align="center">
              <template slot-scope="data">{{ data.row.distance | percentFormat }}</template>
            </el-table-column>
          </tags-list>
          <btn-try-again @click="result = null"/>
        </el-col>
      </el-row>
    </div>
  </demo-service-page>
</template>

<script>
  import { tagCompare } from '~/api'
  import { servicePage } from '~/utils/page'
  import { getServiceItem } from '~/contents/services'
  import TagsList from '~/components/shared/tags-list.vue'

  export default {
    components: {
      TagsList
    },

    data () {
      return {
        service: getServiceItem(this, 'tag_compare'),
        processing: false,
        result: null,
        form: {
          tag: 'Machine Learning',
        }
      }
    },

    methods: {
      onSubmit () {
        this.processing = true
        return tagCompare(this.form)
          .then(({ data }) => this.result = data.data)
          .catch(_ => this.$message.error(this.$t('errors.something_wrong')))
          .finally(() => this.processing = false)
      }
    },

    head () {
      return servicePage(this.service)
    }
  }
</script>
