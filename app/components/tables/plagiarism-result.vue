<template>
  <div>
    <el-table :data="result">
      <el-table-column type="index" width="50"/>
      <el-table-column label="Matched (%)" align="right" width="120">
        <template slot-scope="data">{{ data.row.similarity_point | percentFormat }}</template>
      </el-table-column>
      <el-table-column
        :formatter="(_, __, cellValue) => cellValue.length"
        prop="similar_sentences"
        label="Sentences"
        align="center"
        width="120"/>
      <el-table-column
        prop="url"
        label="URL"
        show-overflow-tooltip>
        <template slot-scope="data">
          <a class="link" :href="data.row.url" target="_blank">{{ data.row.url }}</a>
        </template>
      </el-table-column>
      <el-table-column
        fixed="right"
        label="Actions"
        align="center"
        width="150">
        <template slot-scope="data">
          <el-button
            type="text"
            @click="$refs.detailDialog.open(data.row, data.$index + 1)">
            Details
          </el-button>
        </template>
      </el-table-column>
    </el-table>

    <plagiarism-detail-dialog ref="detailDialog"/>
  </div>
</template>

<script>
  import PlagiarismDetailDialog from '~/components/dialogs/plagiarism-details.vue'

  export default {
    components: {
     PlagiarismDetailDialog
    },

    props: {
      result: {
        type: Array,
        default: () => []
      }
    }
  }
</script>
