<!-- one line in img -->
<template>
    <div class="line-outter">
        <div v-for="(image, index) in imgList"
            :key="image.imgId"
            :class="['img-outter', -1 === image.imgId ? 'img-invisibility' : '']">
            <image-info :imgInfo="image">
                <!-- TODO 恶心 -->
                <!-- <el-checkbox v-if="contains('check', requiredItems)"
                    :class="['check', cSize? cSize: '']"
                    slot="image"
                    v-model="cModel"
                    ref="checkbox"
                    @change="emitCheck($event, index)"
                    :label="image.imgId">{{ '' }}
                </el-checkbox> -->
            </image-info>
        </div>
    </div>
</template>

<style>
    /*.line-outter .img-outter .check-small .el-checkbox__inner {
        width: 14px;
        height: 14px;
    }
    .line-outter .img-outter .check-small .el-checkbox__inner::after {
        height: 6px;
        width: 3px;
        left: 4px;
    }*/
</style>

<style scoped>
    .line-outter {
        display: flex;
        justify-content: space-between;
    }

    .img-outter {
        display: inline-block;
    }
    .img-invisibility {
        visibility: hidden;
    }
/*
    .check {
        position: absolute;
        left: 10px;
        top: 10px;
        width: 18px;
        height: 18px;
        white-space: normal;
    }

    .check-small {
        width: 14px;
        height: 14px;
    }*/
</style>

<script>
    import Image from './image';
    import arrayFunc from '../../../lib/array-func';

    export default {
        props: {
            pageSize: {
                required: true,
                type: Number,
            },
            imgList: {
                required: true,
                type: Array,
            },
            requiredItems: {
                type: Array,
            },
            model: {
                type: Array,
                required: true,
            },
            currentPage: {
                required: true,
                type: Number,
            },
            totalCount: {
                required: true,
                type: Number,
            },
            // checkSize: {
            //     type: String,
            // },
            // how many images placed in one line
            lineCount: {
                type: Number,
            },
            lineIndex: {
                required: true,
                type: Number,
            },
        },
        components: {
            'image-info': Image,
        },
        data() {
            return {
            };
        },
        methods: {
            judgeCheckAll() {
                const contains = function contains(val, list) {
                    return -1 !== list.indexOf(val);
                };
                // 判断当前行是否全部选中
                for (let i = 0; i < this.imgIdList.length; i++) {
                    if (!contains(this.imgIdList[i], this.cModel)) {
                        return false;
                    }
                }
                return true;
            },
            checkAll() {
                this.$emit('checkChange', {
                    list: this.imgList,
                    type: 'add',
                });
            },
            clearAllCheck() {
                this.$emit('checkChange', {
                    list: this.imgList,
                    type: 'remove',
                });
            },
            emitCheck(evt, index) {
                this.$emit('checkChange', {
                    list: [this.imgList[index]],
                    type: this.$refs.checkbox[index].isChecked ? 'remove' : 'add',
                });
            },
        },
        computed: {
            contains() {
                return arrayFunc.contains;
            },
            cSize() {
                switch (this.checkSize) {
                    default:
                    case 'normal':
                        return '';
                    case 'small':
                        return 'check-small';
                }
            },
            cModel() {
                return JSON.parse(JSON.stringify(this.model));
            },
            imgIdList() {
                const list = [];
                this.imgList.forEach(img => {
                    if (-1 !== img.imgId) {
                        list.push(img.imgId);
                    }
                });
                return list;
            },
        },
    };
</script>
