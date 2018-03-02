<template>
  <div class="h__datepicker outter">
    <el-date-picker
      @input="handleInput"
      v-model="tModel"
      :type="type"
      :placeholder="placeholder"
      :class="datpickerClass"
      :disabled="disabled"
      :picker-options="pickerOptions">
    </el-date-picker>
    <div class="clear-replace"
      @click="handleClear">
    </div>
  </div>
</template>

<style scoped>
.outter {
  display: inline-block;
  position: relative;
}

.clear-replace {
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
      default: () => {
        return {};
      }
    }
  },
  data() {
    return {};
  },
  methods: {
    handleInput (val) {
      const convert = date => {
        return date ? Date.parse(new Date(date)) : '';
      };

      // if type is daterange
      if (Array.isArray(val)) {
        this.$emit('change', val.map(convert));
      } else {
        this.$emit('change', convert(val));
      }
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
