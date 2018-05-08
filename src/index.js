// import AlbumList from '../lib/album/album-list';
import Button from '../lib/button/button';
// import Table from '../lib/table/table';
// import TableEdit from '../lib/table/table-edit';
import Datepicker from '../lib/datepicker/datepicker';
import Dialog_1 from '../lib/dialog/dialog1.0';
import Dialog_2 from '../lib/dialog/dialog1.3+';
// import Swiper from '../lib/swiper/swiper';

const install = function (Vue) {
  // Vue.component('h-album-list', AlbumList);
  Vue.component('h-button', Button);
  // Vue.component('h-table', Table);
  // Vue.component('h-table-edit', TableEdit);
  Vue.component('h-datepicker', Datepicker);
  Vue.component('h-dialog-1', Dialog_1);
  Vue.component('h-dialog-2', Dialog_2);
  // Vue.component('h-album-list', AlbumList);
  // Vue.component('h-upload', UploadCore)
  // Vue.component('h-swiper', Swiper);
}

export default {
  install
};
