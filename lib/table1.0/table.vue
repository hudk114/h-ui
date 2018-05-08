<template>
  <el-table
    :data="data"
    :stripe="stripe"
    :border="border"
    class="h__table"
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
      <!-- <el-table-column
        v-else
        inline-template
        :context="$parent"
        :key="index"
        :label="item.label">
        <slot name="edit"></slot>
      </el-table-column> -->
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
.h__table .el-table__fixed-header-wrapper .el-table__header .cell,
.h__table .el-table__header-wrapper .el-table__header .cell {
  text-align: center;
}
</style>
