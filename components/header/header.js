import icon from '~/components/icon/icon.vue';

export default {
  name: 'header-component',

  components: {
    icon
  },

  data() {
    return {
      mainMenuItems: [
        {
          text: 'Блог',
          href: '#',
          icon: 'blog'
        },
        {
          text: 'Путеводитель',
          href: '#',
          icon: 'path'
        },
        {
          text: 'Попутчики',
          href: '#',
          icon: 'human'
        },
        {
          text: 'Отдых в Беларуси',
          href: '#',
          icon: 'rest'
        }
      ]
    };
  },

  computed: {},

  watch: {},

  created() {},

  mounted() {},

  methods: {},

  beforeDestroy() {}
};
