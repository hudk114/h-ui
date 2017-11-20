<template>
    <div class="ui-album-tab-outter">
        <el-tabs class="ui-album-tab"
            @tab-click="tClick"
            :value="actName">
            <el-tab-pane class="ui-album-tab-pane"
                v-for="tab in tabList"
                :name="tab.key.toString()"
                :label="tab.name + ('undefined' !== typeof tab.number ? '(' + tab.number + ')' : '')">
            </el-tab-pane>
        </el-tabs>
        <album-list :imgList="imgList"
            :model="cModel"
            :lineClass="lineClass"
            @checkChange="checkChange"
            :currentPage="currentPage"
            :totalCount="totalCount"
            :pageSize="pageSize"
            :requiredItems="requiredItems"
            :lineCount="lineCount"
            ref="albumList">
        </album-list>
    </div>
</template>

<style>
    .ui-album-tab {
        margin-bottom: 15px;
    }

    .ui-album-tab .el-tabs__active-bar {
        display: block;
        top: 38px;
    }

    .ui-album-tab .el-tabs__header {
        display: flex;
        width: 100%;
        justify-content: space-between;
        padding: 1px;
        border-bottom: 1px solid #d3dce6;
    }

    .ui-album-tab .el-tabs__item {
        border: 1px solid #eff2f7;
        background: #eff2f7;
    }

    .ui-album-tab .el-tabs__item.is-active {
        border: 1px solid #d3dce6;
        border-radius: 0;
        border-top: none;
        background: #fff;
    }
    .ui-album-tab .el-tabs__item.is-active:first-child {
        border: 1px solid #d3dce6;
        border-radius: 0;
        border-top: none;
        background: #fff;
    }

    .ui-album-tab .el-tabs__header .el-tabs__item {
        width: auto;
        white-space: nowrap;
    }

    .ui-album-tab .el-tabs__content {
        display: none;
    }
</style>

<style scoped>
</style>

<script>
    import AlbumList from './album-list';

    export default {
        props: {
            imgList: {
                required: true,
                type: Array,
            },
            model: {
                required: true,
                type: Array,
            },
            lineClass: {
                type: String,
            },
            currentPage: {
                required: true,
                type: Number,
            },
            totalCount: {
                required: true,
                type: Number,
            },
            pageSize: {
                required: true,
                type: Number,
            },
            lineCount: {
                required: true,
                type: Number,
            },
            requiredItems: {
                required: true,
                type: Array,
            },
            tabList: {
                required: true,
                type: Array,
            },
            activeName: {
                required: true,
                type: String,
            },
        },
        components: {
            'album-list': AlbumList,
        },
        methods: {
            tClick(component) {
                this.$emit('tabClick', {
                    index: component.index,
                    key: component.name,
                });
            },
            checkChange({ list, type }) {
                this.$emit('checkChange', { list, type });
            },
        },
        computed: {
            cModel() {
                return JSON.parse(JSON.stringify(this.model));
            },
            actName() {
                return JSON.parse(JSON.stringify(this.activeName));
            },
        },
        data() {
            return {
            };
        },
    };
</script>
