import AlbumList from '../lib/album/album-list'
import UploadCore from '../lib/upload/upload-core'

const install = function (Vue) {
  Vue.component('hui-album-list', AlbumList)
  // Vue.component('hui-upload', UploadCore)
}

export default {
  install,
}
