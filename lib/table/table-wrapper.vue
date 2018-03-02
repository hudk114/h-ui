<!-- 基于element-ui做了封装的table -->
<template>
  <el-table
    :data="data"
    :border="border"
    :stripe="stripe">
    <slot></slot>
  </el-table>
</template>

<style>

</style>

<script>
export default {
  props: {
    data: {
      type: Array,
      default: []
    },
    border: Boolean,
    stripe: Boolean
  },
  methods: {

  }
};
</script>
