<template>
  <div>
    <div class="c_instruction">before element 1.3(1.0 - 1.2), use h-table-1. for 1.3+, use h-table-2!</div>
    
    <div>h-table-1</div>
    <h-table-1 class="table"
      :data="data"
      :column="column"
      border>
      <el-table-column :context="_self"
        label="自定义"
        width="180"
        slot="自定义"
        inline-template>
        <div>
          <span>自定义的内容</span>
        </div>
      </el-table-column>
    </h-table-1>

    <div>h-table-2</div>
    <h-table-2 class="table"
      :data="data"
      :column="column"
      border>
      <el-table-column label="自定义"
        width="180"
        slot="自定义">
        <template slot-scope="scope">
          <div>
            <span>自定义的内容</span>
          </div>
        </template>
      </el-table-column>
    </h-table-2>
  </div>
</template>

<script>
export default {
  data () {
    return {
      column: [
        {
          type: 'index',
          label: 'No.',
          align: 'center',
          width: '60'
        },
        {
          label: '姓名',
          prop: 'name',
          align: 'center'
        },
        {
          label: '性别',
          prop: 'sex',
          align: 'left'
        },
        {
          label: '分数',
          prop: 'score',
          width: '100',
          align: 'center'
        },
        {
          edit: true,
          column: [
            {
              name: '编辑',
              callback: this.handleEdit
            }
          ],
          label: '操作'
        },
        {
          slot: true,
          label: '自定义',
          width: '80',
          align: 'center'
        },
      ],
      data: [
        {
          name: '赵',
          sex: '男',
          score: 55
        },
        {
          name: '钱',
          sex: '男',
          score: 66
        },
        {
          name: '孙',
          sex: '女',
          score: 77
        }
      ]
    }
  },
  methods: {
    handleEdit (row, index) {
      alert(`you click number ${index}, whose name is ${row.name}`);
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
