export default {
  name: 'main-menu-component',
  data() {
    return {
      menusArray: [{
        id: 0,
        name: 'Home',
        urls: '#',
      },
      {
        id: 1,
        name: 'About',
        urls: '#',
      },
      {
        id: 2,
        name: 'Services',
        urls: '#',
      },
      {
        id: 3,
        name: 'Contact',
        urls: '#',
      },
      ],
      checkedMenuState: false,
    };
  },
  methods: {
    navigasiMenuUtama(item) {
      // navigasi ke routing tujuan ketika daftar menu dipilih
      console.log(item.name);
      console.log(this.checkedMenuState);
      this.checkedMenuState = false;
    },
    navigasiReadmore() {
      // navigasi ketika tombol read more dipencet
    },
    onChangedStateCheckbox() {
      // membaca status checkbox ketika checkbox berubah
      console.log(`onchanged: ${this.checkedMenuState}`);
    },
  },
  computed: {

  },
};
