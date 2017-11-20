<template>
    <el-dialog :class="['base-dialog', customClass ? customClass : '']"
        size="tiny"
        v-model="md"
        :title="title"
        @open="open"
        @close="close">
        <slot></slot>
        <div class="footer"
            slot="footer">
            <slot name="footer"></slot>
            <div class="clear"></div>
        </div>
    <el-dialog>
</template>

<style>
    .base-dialog .el-dialog {
        width: auto;
    }
    .base-dialog .el-dialog__header {
        background-color: #f9fafc;
        padding: 16px 20px;
        border-bottom: 1px solid #d3dce6;
    }
    .base-dialog .el-dialog__title {
        font-size: 18px;
        color: #475669;
    }
    .base-dialog .el-dialog__headerbtn {
        margin-top: 3px;
        font-size: 14px;
    }
    .base-dialog .el-dialog__footer {
        padding: 0;
    }
</style>

<style scoped>
    .footer {
        width: 100%;
        text-align: center;
    }

    .clear {
        clear: both;
    }
</style>

<script>
    export default {
        props: ['model', 'title'],
        methods: {
            open() {
                this.$emit('open');
            },
            close() {
                this.$emit('close');
            },
        },
        computed: {
            md() {
                return this.model;
            },
        },
    };
</script>
