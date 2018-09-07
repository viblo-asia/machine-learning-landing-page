<template>
  <el-alert v-if="isEmpty" type="info" title="">Không có dữ liệu</el-alert>
  <el-table v-else :data="tags">
    <el-table-column prop="tag" label="Tên tag"/>
    <slot/>
    <el-table-column prop="slug" label="Link" width="100" align="center">
      <template slot-scope="{ row }">
        <a
          :href="toTag(row)"
          target="_blank"
          class="link link--plain"
          title="Open this tag in new tab">
          <fa-icon icon="external-link-alt"/>
        </a>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    props: {
      tags: {
        type: Array,
        default: () => []
      }
    },

    computed: {
      isEmpty() {
        return !this.tags.length
      }
    },

    methods: {
      toTag(tag) {
        return `https://viblo.asia/tags/${tag.slug}`
      }
    }
  }
</script>
