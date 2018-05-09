<template>
  <el-table
    :data="data"
    :stripe="stripe"
    :border="border"
    class="ui__table"
    @selection-change="handleSelect">
    <template
      v-for="(item, index) in column">
      <el-table-column
        v-if="item.type"
        :type="item.type"
        :label="item.label"
        :align="item.align"
        :key="index"
        :width="item.width">
      </el-table-column>
      <template
        v-else>
        <el-table-column
          v-if="!item.slot"
          :align="item.align"
          :key="index"
          :width="item.width"
          :show-overflow-tooltip="item.tooltip"
          :prop="item.prop"
          :label="item.label">
        </el-table-column>
        <slot :name="item.name" v-else></slot>
      </template>
    </template>
  </el-table>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      default: []
    },
    column: {
      type: Array,
      default: []
    },
    stripe: {
      type: Boolean,
      default: false
    },
    border: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleSelect (selection) {
      this.$emit('selection-change', selection);
    }
  }
};
</script>

<style>
.ui__table .el-table__fixed-header-wrapper .el-table__header .cell,
.ui__table .el-table__header-wrapper .el-table__header .cell {
  text-align: center;
}
</style>
