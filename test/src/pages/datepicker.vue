<template>
  <div>
    <div class="c_instruction">for element ui 1.3- only, fix bug that can't remove init value</div>
    <h-datepicker :model="date"
      @change="handleChange"
      @clear="handleClear">
    </h-datepicker>
  </div>
</template>

<script>
export default {
  methods: {
    handleChange (val) {
      this.date = val ? new Date(val) : '';
    },
    handleClear () {
      this.date = '';
    }
  },
  data () {
    return {
      date: new Date()
    };
  }
};
</script>

<style scoped>
</style>
