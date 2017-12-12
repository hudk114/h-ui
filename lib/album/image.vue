<template>
    <div class="outter">
        <a :href="imgInfo.imgUrlSrc"
            target="_blank">
            <img :src="imgInfo.imgUrl" />
        </a>
        <slot name="image">
        </slot>
    </div>
</template>

<style scoped>
    .outter {
        display: inline-block;
        position: relative;
        width: auto;
        height: auto;
    }
</style>

<script>
    export default {
        props: ['imgInfo'],
        data() {
            return {
                model: [],
            };
        },
        methods: {
        },
        computed: {
        },
    };
</script>
