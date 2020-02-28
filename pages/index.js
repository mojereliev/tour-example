import {mapGetters} from 'vuex';

export default {
  name: 'index-root',

  components: {},

  data() {
    return {
      enableCasesAnimation: false
    };
  },

  computed: {
    ...mapGetters([
      'isMobile'
    ])
  },

  watch: {},

  created() {},

  mounted() {},

  methods: {},

  beforeDestroy() {}
};
