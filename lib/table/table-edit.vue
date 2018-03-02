<template>
  <h-table
    :data="data"
    :column="fixedColumn"
    :border="border"
    :stripe="stripe"
    @selection-change="handleSelect">
    <!-- 上层slot传入下层 -->
    <!-- 渲染的时候会造成多次slot渲染，因为element底层问题，一个el-table-column生成了多个div -->
    <template
      v-for="item in inlineColumn"
      :slot="item.label">
      <slot :name="item.label"></slot>
    </template>
    <el-table-column
      v-for="(item, index) in editColumn"
      :key="index"
      inline-template
      align="center"
      :context="_self"
      :width="item.width"
      :label="item.label"
      :slot="item.label"
      :fixed="item.fixed">
      <span>
        <h-button
          class="h__table-button"
          v-for="(button, i) in item.column"
          :key="i"
          type="table"
          @click="button.callback(row, $index)">
          {{ button.name || button.judgeName(row) }}
        </h-button>
      </span>
    </el-table-column>
  </h-table>
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
  computed: {
    editColumn () {
      return this.column.filter(item => item.edit);
    },
    inlineColumn () {
      return this.column.filter(item => item.inline);
    },
    fixedColumn () {
      return this.column.map(item => {
        if (!(item.edit || item.inline)) {
          return item;
        }
        return {
          slot: true,
          name: item.label
        };
      });
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
  .h__table-button {
    margin-left: 10px;
  }

  .h__table-button:first-child {
    margin-left: 0;
  }
</style>
