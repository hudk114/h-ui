<template>
  <h-table-inner
    :data="data"
    :column="fixedColumn"
    :border="border"
    :stripe="stripe"
    @selection-change="handleSelect">
    <template
      v-for="item in slotColumn"
      :slot="item.label">
      <slot :name="item.label"></slot>
    </template>
    <el-table-column
      v-for="(item, index) in editColumn"
      :key="index + '0'"
      inline-template
      align="center"
      :context="_self"
      :width="item.width"
      :label="item.label"
      :slot="item.label"
      :fixed="item.fixed">
      <span>
        <h-button class="ui__table-button"
          v-for="(button, i) in item.column"
          :key="i + '0'"
          type="table"
          @click="button.callback(row, $index)">
          {{ button.name || button.judgeName(row) }}
        </h-button>
      </span>
    </el-table-column>
  </h-table-inner>
</template>

<script>
import TableI from './table-inner1.0';

export default {
  components: {
    'h-table-inner': TableI
  },
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
    editColumn() {
      return this.column.filter(item => item.edit);
    },
    slotColumn() {
      return this.column.filter(item => item.slot);
    },
    fixedColumn() {
      return this.column.map(item => {
        if (!(item.edit || item.slot)) {
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
    handleSelect(selection) {
      this.$emit('selection-change', selection);
    }
  }
};
</script>

<style>
.ui__table-button {
  margin-left: 10px;
}

.ui__table-button:first-child {
  margin-left: 0;
}
</style>
