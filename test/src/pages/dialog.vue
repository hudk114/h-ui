<template>
  <div>
    <div class="c_instruction">before element 1.3(1.0 - 1.2), use h-dialog-1. for 1.3+, use h-dialog-2!</div>
    <h-button class="button" @click="test">open</h-button>
    <h-dialog-2 :model="dialogVisible"
      title="test dialog"
      @close="dialogVisible = false;">
      <div>hello world!</div>
      <div slot="footer" style="padding-bottom: 20px;">
        <h-button class="button" @click="dialogVisible = false;">confirm</h-button>
        <h-button class="button" type="negative" @click="dialogVisible = false;">cancel</h-button>
      </div>
    </h-dialog-2>
  </div>
</template>

<script>
export default {
  data () {
    return {
      dialogVisible: false
    };
  },
  methods: {
    test () {
      this.dialogVisible = true;
    }
  }
};
</script>

<style scoped>
.button {
  width: 80px;
  height: 36px;
}
</style>
