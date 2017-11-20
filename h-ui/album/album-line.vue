<!-- one line in img -->
<template>
    <div class="line-outter">
        <div v-for="(image, index) in imgList"
            :key="image.imgId"
            :class="['img-outter', -1 === image.imgId ? 'img-invisibility' : '']">
            <image-info :imgInfo="image">
                <!-- TODO 恶心 -->
                <el-checkbox v-if="contains('check', requiredItems)"
                    :class="['check', cSize? cSize: '']"
                    slot="image"
                    v-model="cModel"
                    ref="checkbox"
                    @change="emitCheck($event, index)"
                    :label="image.imgId">{{ '' }}
                </el-checkbox>
                <button class="cover"
                    slot="image"
                    v-if="contains('cover', requiredItems) && !image.isCover"
                    @click="cover(image.imgId)">
                </button>
                <span class="cover-selected"
                    slot="image"
                    v-if="contains('cover', requiredItems) && image.isCover">
                </span>
                <span class="handle-button-group"
                    slot="image">
                    <button class="del group-button"
                        v-if="contains('del', requiredItems)"
                        @click="del(image.imgId)">
                    </button>
                    <button class="trans group-button"
                        v-if="contains('trans', requiredItems)"
                        @click="trans(image.imgId)">
                    </button>
                    <button class="right group-button"
                        v-if="contains('direct', requiredItems) && totalCount !== (currentPage - 1) * pageSize + lineIndex * lineCount + index + 1"
                        @click="direct(image.imgId, 'right')">
                    </button>
                    <button class="left group-button"
                        v-if="contains('direct', requiredItems) && !(1 === currentPage && 0 === lineIndex && 0 === index)"
                        @click="direct(image.imgId, 'left')">
                    </button>
                </span>
            </image-info>
        </div>
    </div>
</template>

<style>
    .line-outter .img-outter .check-small .el-checkbox__inner {
        width: 14px;
        height: 14px;
    }
    .line-outter .img-outter .check-small .el-checkbox__inner::after {
        height: 6px;
        width: 3px;
        left: 4px;
    }
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
    }

    .cover {
        position: absolute;
        width: 85px;
        height: 24px;
        top: 0;
        right: 0;
        background: url('./images/cover.png');
        border-style: none;
    }
    .cover:hover {
        background: url('./images/cover-hover.png');
        cursor: pointer;
    }

    .cover-selected {
        position: absolute;
        width: 85px;
        height: 24px;
        top: 0;
        right: 0;
        background: url('./images/cover-selected.png');
        border-style: none;
    }

    .handle-button-group {
        position: absolute;
        right: 0px;
        bottom: 0px;
    }
    .group-button {
        float: right;
        margin-left: 1px;
        width: 24px;
        height: 24px;
        border-style: none;
    }
    .group-button:hover {
        cursor: pointer;
    }
    .del {
        background: url('./images/dustbin.png') no-repeat center center;
    }
    .del:hover {
        background: url('./images/dustbin-hover.png') no-repeat center center;
    }
    .trans {
        background: url('./images/trans.png') no-repeat center center;
    }
    .trans:hover {
        background: url('./images/trans-hover.png') no-repeat center center;
    }
    .right {
        background: url('./images/right.png') no-repeat center center;
    }
    .right:hover {
        background: url('./images/right-hover.png') no-repeat center center;
    }
    .left {
        background: url('./images/left.png') no-repeat center center;
    }
    .left:hover {
        background: url('./images/left-hover.png') no-repeat center center;
    }
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
            cover: {
                type: Function,
            },
            del: {
                type: Function,
            },
            trans: {
                type: Function,
            },
            direct: {
                type: Function,
            },
            checkSize: {
                type: String,
            },
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
