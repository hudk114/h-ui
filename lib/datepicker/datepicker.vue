<template>
  <div class="h__datepicker-wrapper">
    <el-date-picker
      @input="handleInput"
      v-model="tModel"
      :type="type"
      :placeholder="placeholder"
      :class="datpickerClass"
      :disabled="disabled"
      :picker-options="pickerOptions">
    </el-date-picker>
    <div class="h__datepicker-clear-replace"
      @click="handleClear">
    </div>
  </div>
</template>

<style>
.h__datepicker-wrapper {
  display: inline-block;
  position: relative;
}

.h__datepicker-clear-replace {
  width: 34px;
  height: 34px;
  line-height: 34px;
  border-radius: 4px;
  background-color: #fff;
  position: absolute;
  right: 1px;
  top: 1px;

  text-align: center;
  font-family: element-icons !important;
  font-style: normal;
  font-weight: 400;
  font-variant: normal;
  text-transform: none;
  -webkit-font-smoothing: antialiased;
  color: #c0ccda;
}

.clear-replace::before {
  content: "\E611";
}

.clear-replace:hover::before {
  content: "\E60C";
}
</style>

<script>
/**
 * for element 1.0, which date picker has several bugs
 */
export default {
  props: {
    model: {
      required: true
    },
    type: {
      type: String,
      default: 'date'
    },
    placeholder: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean
    },
    datepickerClass: {
      type: String
    },
    pickerOptions: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    handleInput (val) {
      const convert = date => date ? Date.parse(new Date(date)) : '';

      // if type is daterange
      this.$emit(
        'change',
        Array.isArray(val) ?
          val.map(convert) : // type is daterange
          convert(val)
      );
    },
    handleClear () {
      this.$emit('clear');
    }
  },
  computed: {
    tModel() {
      return this.model;
    },
    datpickerClass() {
      return this.datepickerClass;
    }
  }
};
</script>
