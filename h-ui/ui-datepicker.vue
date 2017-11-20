<template>
    <div class="outter" @click="handleClick">
        <el-date-picker
            @input="handleInput"
            v-model="tModel"
            :type="type"
            :placeholder="placeholder">
        </el-date-picker>
    </div>
</template>

<style scoped>
    .outter {
        display: inline-block;
    }
</style>

<script>

    export default {
        props: {
            model: {
                required: true,
            },
            type: {
                type: String,
                default: 'date',
            },
            placeholder: {
                type: String,
                default: '',
            },
        },
        data() {
            return {
                triggerFlag: false,
            };
        },
        methods: {
            handleInput(val) {
                // click on input would trigger bind. no need to handle then.
                this.triggerFlag = true;
                this.$emit('change', val ? Date.parse(new Date(val)) : '');
            },
            handleClick() {
                // this function only trigger once, before bind.
                if (this.triggerFlag) {
                    return;
                }
                this.handleClear();
            },
            handleClear() {
                this.$emit('clear');
            },
        },
        computed: {
            tModel() {
                return this.model;
            },
        },
    };
</script>
