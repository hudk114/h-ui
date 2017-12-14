<template>
<div class="outter">
  test
  <!-- TODO -->
  <album-line v-for="(imgL, index) in lineList"
    :key="index"
    :class="lineClass"
    :imgList="imgL"
    :model="cModel"
    @checkChange="checkChangeInner"
    :currentPage="currentPage"
    :totalCount="totalCount"
    :pageSize="pageSize"
    :requiredItems="requiredItems" 
    :checkSize="checkSize"
    :lineCount="lineCount"
    :lineIndex="index" ref="line">
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

.handle-button-group {
  position: absolute;
  right: 0;
  bottom: 0;
}
</style>

<script>
import AlbumLine from './album-line'

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
      default () {
        return []
      },
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
    checkSize: {
      type: String,
      default: 'normal'
    },
    // how many images placed in one line
    lineCount: {
      type: Number,
      required: true,
    },
    lineClass: {
      type: String,
      default: '',
    },
  },
  components: {
    'album-line': AlbumLine,
  },
  data () {
    return {}
  },
  methods: {
    checkChangeInner ({
      list,
      type
    }) {
      this.$emit('checkChange', {
        type,
        list
      })
      // this.checkChange(idList, type, imgList);
    },
    judgeCheckAll () {
      // 判断当前页是否全部选中
      for (let i = 0; i < this.$refs.line.length; i++) {
        if (!this.$refs.line[i].judgeCheckAll()) {
          return false
        }
      }
      return true
    },
    checkAll () {
      this.$refs.line.forEach(line => {
        line.checkAll()
      })
    },
    clearAllCheck () {
      this.$refs.line.forEach(line => {
        line.clearAllCheck()
      })
    },
  },
  computed: {
    lineList () {
      // 根据imgList，lineCount算出每行的元素并返回
      const lList = []
      let line = []
      this.imgList.forEach((img, index) => {
        if (index !== 0 && index % this.lineCount === 0) {
          lList.push(line)
          line = []
        }
        line.push(img)
      })
      if (line.length > 0) {
        // 补齐
        const item = JSON.parse(JSON.stringify(this.imgList[0]))
        while (line.length % this.lineCount !== 0) {
          item.imgId = -1 * (line.length % this.lineCount)
          line.push(JSON.parse(JSON.stringify(item)))
        }
        lList.push(line)
      }
      return lList
    },
    cModel () {
      return JSON.parse(JSON.stringify(this.model))
    },
  },
}
</script>
