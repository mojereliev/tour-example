import icon from '~/components/icon/icon.vue';

export default {
  name: 'image-slider',

  components: {
    icon
  },

  props: {
    slides: {
      type: Array,
      required: true
    },
    options: {
      type: Object
    }
  },

  data() {
    return {
      defaultOptions: {
        slidesPerView: 1,
        spaceBetween: 0,
        navigation: {
          nextEl: '.image-slider__button-next',
          prevEl: '.image-slider__button-prev'
        }
      }
    };
  },

  computed: {
    swiperOptions() {
      return {
        ...this.defaultOptions,
        ...this.options
      };
    }
  },

  watch: {},

  created() {},

  mounted: function () {},

  methods: {},

  beforeDestroy() {}
};
