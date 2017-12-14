<template>
  <div class="">
    album-list
    <album-list :pageSize="10"
      :imgList="imgList"
      :model="checkModel"
      :currentPage="1"
      :totalCount="1"
      :lineCount="5">
    </album-list>
  </div>
</template>

<script>
import albumList from '../../h-ui/lib/album/album-list'

export default {
  components: {
    'album-list': albumList
  },
  data () {
    return {
      imgList: [
        {
          imgId: 1,
          imgUrlSrc: require('../../assets/logo.png'),
          imgUrl: require('../../assets/logo.png')
        },
        {
          imgId: 2,
          imgUrlSrc: require('../../assets/logo.png'),
          imgUrl: require('../../assets/logo.png')
        },
        {
          imgId: 3,
          imgUrlSrc: require('../../assets/logo.png'),
          imgUrl: require('../../assets/logo.png')
        },
        {
          imgId: 4,
          imgUrlSrc: require('../../assets/logo.png'),
          imgUrl: require('../../assets/logo.png')
        },
        {
          imgId: 5,
          imgUrlSrc: require('../../assets/logo.png'),
          imgUrl: require('../../assets/logo.png')
        },
        {
          imgId: 6,
          imgUrlSrc: require('../../assets/logo.png'),
          imgUrl: require('../../assets/logo.png')
        }
      ],
      checkModel: []
    }
  },
  methods: {
  },
}
</script>

<style media="screen">

</style>
