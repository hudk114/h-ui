<template>
  <el-dialog :class="['h__dialog', customClass ? customClass : '']"
    size="tiny"
    v-model="md"
    :title="title"
    @open="open"
    @close="close">
    <slot></slot>
    <div class="h__dialog-footer"
      slot="footer">
      <slot name="footer"></slot>
      <div class="h__clear"></div>
    </div>
  </el-dialog>
</template>

<style>
.h__dialog .el-dialog {
  width: auto;
}

.h__dialog .el-dialog__header {
  background-color: #f9fafc;
  padding: 16px 20px;
  border-bottom: 1px solid #d3dce6;
}

.h__dialog .el-dialog__title {
  font-size: 18px;
  color: #475669;
}

.h__dialog .el-dialog__headerbtn {
  margin-top: 3px;
  font-size: 14px;
}

.h__dialog .el-dialog__footer {
  padding: 0;
}

.h__dialog-footer {
  width: 100%;
  text-align: center;
}
</style>

<script>
export default {
  props: ['model', 'title', 'customClass'],
  methods: {
    open() {
      this.$emit('open');
    },
    close() {
      this.$emit('close');
    }
  },
  computed: {
    md() {
      return this.model;
    }
  }
};
</script>
