<template>
    <div class="outter">
        <album-line v-for="(imgL, index) in lineList"
            :class="lineClass"
            :imgList="imgL"
            :model="cModel"
            @checkChange="checkChangeInner"
            :currentPage="currentPage"
            :totalCount="totalCount"
            :pageSize="pageSize"
            :requiredItems="requiredItems"
            :checkSize="cSize"
            :del="del"
            :lineCount="lineCount"
            :lineIndex="index"
            ref="line">
        </album-line>
    </div>
</template>

<style scoped>
    .image-outter {
        display: inline-block;
    }

    .check {
        position: absolute;
        left: 10px;
        top: 10px;
        width: 18px;
        height: 18px;
        white-space: normal;
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
    import AlbumLine from './album-line';
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
            lineClass: {
                type: String,
            },
        },
        components: {
            'album-line': AlbumLine,
        },
        data() {
            return {
            };
        },
        methods: {
            checkChangeInner({ list, type }) {
                this.$emit('checkChange', { type, list });
                // this.checkChange(idList, type, imgList);
            },
            judgeCheckAll() {
                // 判断当前页是否全部选中
                for (let i = 0; i < this.$refs.line.length; i++) {
                    if (!this.$refs.line[i].judgeCheckAll()) {
                        return false;
                    }
                }
                return true;
            },
            checkAll() {
                this.$refs.line.forEach(line => {
                    line.checkAll();
                });
            },
            clearAllCheck() {
                this.$refs.line.forEach(line => {
                    line.clearAllCheck();
                });
            },
        },
        computed: {
            arrayFunc() {
                return arrayFunc;
            },
            lineList() {
                // 根据imgList，lineCount算出每行的元素并返回
                const lList = [];
                let line = [];
                this.imgList.forEach((img, index) => {
                    if (0 !== index && 0 === index % this.lineCount) {
                        lList.push(line);
                        line = [];
                    }
                    line.push(img);
                });
                if (0 < line.length) {
                    // 补齐
                    const item = JSON.parse(JSON.stringify(this.imgList[0]));
                    item.imgId = -1;
                    while (0 !== line.length % this.lineCount) {
                        line.push(item);
                    }
                    lList.push(line);
                }
                return lList;
            },
            cSize() {
                return this.checkSize || 'normal';
            },
            cModel() {
                return JSON.parse(JSON.stringify(this.model));
            },
        },
    };
</script>
