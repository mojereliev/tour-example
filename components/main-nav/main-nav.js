export default {
  name: 'main-nav',

  components: {},

  data() {
    return {
      items: [
        {
          text: 'Туры',
          to: '/tours'
        },
        {
          text: 'Визы',
          to: '/visa'
        },
        {
          text: 'Отели',
          to: '/hotels'
        },
        {
          text: 'Авиабилеты',
          to: '/tickets'
        },
        {
          text: 'Турфирмы',
          to: '/firms'
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
