<template>
  <div class="upload-outter">
    <input 
      type="file"
      class="upload-input"
      ref="upload"
      multiple="multiple"
      @change="fileRead" />
    <div
      class="upload-content"
      v-if="fList.length > 0">
      <div class="upload-file-path"
        :key="file.path.toString()"
        v-for="file in fList">
        {{ file.path }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['beforeUpload', 'fileList'],
  methods: {
    triggerUpload() {
      this.$refs.upload.click();
    },
    clearUpload() {
      this.$refs.upload.value = '';
    },
    getFileList() {
      return this.$refs.upload.files;
    },
    fileRead() {
      if (this.beforeUpload()) {
        this.$emit('upload', this.getFileList());
      }
    }
  },
  computed: {
    fList() {
      return this.fileList;
    }
  }
};
</script>

<style>
.upload-outter {
  margin: 10px 0;
}

.upload-input {
  display: none;
}

.upload-content {
  display: block;
  font-size: 14px;
}
</style>
