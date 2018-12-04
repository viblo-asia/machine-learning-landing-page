<template>
  <el-dialog
    :visible.sync="state.show" :title="`Similar post ${index}`" name="Plagiarism">
    <div v-if="post" style="margin-top: -2rem;">
      <p>
        <span>Matched: {{ post.similarity_point | percentFormat }}%</span>
        <span class="mx-1">-</span>
        <span>Similar sentences: {{ post.similar_sentences.length }}</span>
      </p>
      <p>
        Link: <a :href="post.url" target="_blank" class="link">{{ post.url }}</a>
      </p>

      <el-table :data="post.similar_sentences">
        <el-table-column type="index" label="#" width="50"/>
        <el-table-column label="Similar sentence">
          <template slot-scope="data">
            <div style="word-break: break-word">{{ data.row }}</div>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </el-dialog>
</template>

<script>
  export default {
    filters: {
      percentFormat: (value) => {
        return Math.round(parseFloat(value) * 100 * 1000) / 1000
      }
    },

    data: () => ({
      index: 1,
      post: null,
      state: {
        show: false
      }
    }),

    methods: {
      open (post, index) {
        this.post = post
        this.index = index
        this.state.show = true
      },

      close () {
        this.state.show = false
      }
    }
  }
</script>

<style scoped>

</style>
