<template>
  <div class="flex flex--justify-center">
    <el-button
      type="primary"
      :class="btnClass"
      @click="$emit('click', $event)">
      {{ title ? title : $t('form.labels.try_again') }}
    </el-button>
  </div>
</template>

<script>
  export default {
    name: 'btn-try-again',

    props: {
      title: String,

      btnClass: {
        type: String,
        default: 'mt-3'
      }
    }
  }
</script>
