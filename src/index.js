import AlbumList from '../lib/album/album-list';
import Button from '../lib/button/button';
import Table from '../lib/table/table';
import TableEdit from '../lib/table/table-edit';
import Datepicker from '../lib/datepicker/datepicker';

const install = function (Vue) {
  Vue.component('h-album-list', AlbumList);
  Vue.component('h-button', Button)
  Vue.component('h-table', Table);
  Vue.component('h-table-edit', TableEdit);
  Vue.component('h-datepicker', Datepicker);
  Vue.component('h-album-list', AlbumList);
  // Vue.component('h-upload', UploadCore)
}

export default {
  install
};
