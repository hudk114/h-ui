<template>
  <div>
    <div class="c_instruction">four types of button, commonly used in other components</div>
    <h-button class="button" @click="test('default')">default</h-button>
    <h-button class="button" type="negative" @click="test('negative')">negative</h-button>
    <h-button class="button" type="table" @click="test('table')">table</h-button>
    <h-button class="button" type="text" @click="test('text')">text</h-button>
  </div>
</template>

<script>
export default {
  methods: {
    test (name) {
      alert(`you click ${name} button!`);
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
