<template>
  <button :disabled="disabled"
    :class="[
      'h__button',
      type ? 'h__button-' + type : '',
      disabled ? 'h__button-disabled' : ''
    ]"
    @click="click">
    <slot></slot>
  </button>
</template>

<style>
.h__button {
  cursor: pointer;
  font-size: 14px;
}

.h__button-disabled:hover {
  cursor: not-allowed;
}

.h__button-positive:hover,
.h__button-positive:focus {
  border-color: #58b7ff;
  background-color: #58b7ff;
}
.h__button-positive {
  border: 1px solid #20a0ff;
  background-color: #20a0ff;
  color: #fff;
  line-height: 0.1;
  border-radius: 3px;
}
.h__button-positive:active {
  border-color: #1d90e6;
  background-color: #1d90e6;
}

.h__button-negative {
  border: 1px solid #d3dce6;
  border-radius: 2px;
  background-color: #f9fafc;
  color: #475669;
}
.h__button-negative:hover {
  color: #20a0ff;
  border-color: #20a0ff;
}

.h__button-upload {
  border: 1px solid #ff4949;
  background-color: #ff4949;
  color: #fff;
  border-radius: 3px;
}
.h__button-upload:hover {
  border-color: #ff6d6d;
  background-color: #ff6d6d;
}

.h__button-table {
  background-color: #eff2f7;
  border-radius: 100px;
  border: 1px solid transparent;
  outline: none;
}
.h__button-table:hover {
  border: 1px solid #20a0ff;
  color: #20a0ff;
}
.h__button-table:focus {
  /* box-shadow: 0 0 0 3px #2090ff; */
}

.h__button-text {
  color: #20a0ff;
  border: none;
}
.h__button-text:focus,
.h__button-text:hover {
  color: #4db3ff;
}
.h__button-text:active {
  color: #1d90e6;
}
</style>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'positive'
    },
    disabled: Boolean,
  },
  methods: {
    click() {
      this.$emit('click');
    }
  }
};
</script>
