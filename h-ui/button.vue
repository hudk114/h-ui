<template>
    <button :disabled="disabled"
        :class="[
            'button',
            type ? 'button-' + type : '',
        ]"
        @click="click">
        <slot></slot>
    </button>
</template>

<style scoped>
    .button {
        cursor: pointer;
        font-size: 14px;
    }

    .button-positive {
        border: 1px solid #20a0ff;
        background-color: #20a0ff;
        color: #fff;
        border-radius: 3px;
    }
    .button-positive:hover {
        border-color: #58b7ff;
        background-color: #58b7ff;
    }

    .button-negative {
        border: 1px solid #d3dce6;
        border-radius: 2px;
        background-color: #f9fafc;
        color: #475669;
    }
    .button-negative:hover {
        color: #20a0ff;
        border-color: #20a0ff;
    }

    .button-upload {
        border: 1px solid #ff4949;
        background-color: #ff4949;
        color: #fff;
        border-radius: 3px;
    }
    .button-upload:hover {
        border-color: #ff6d6d;
        background-color: #ff6d6d;
    }

    .button-table {
        background-color: #eff2f7;
        border-radius: 100px;
        border: none;
    }
    .button-table:hover {
        border: 1px solid #20a0ff;
        color: #20a0ff;
    }
</style>

<script>
    export default {
        props: {
            type: {
                type: String,
                default: 'positive',
            },
            disabled: Boolean,
        },
        methods: {
            click() {
                this.$emit('click');
            },
        },
    };
</script>
