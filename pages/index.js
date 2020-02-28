import {mapGetters} from 'vuex';

import breadcrumbs from '~/components/breadcrumbs/breadcrumbs.vue';
import icon from '~/components/icon/icon.vue';
import imageSlider from '~/components/image-slider/image-slider.vue';
import labelMark from '~/components/label-mark/label-mark.vue';
import rating from '~/components/rating/rating.vue';

export default {
  name: 'index-root',

  components: {
    breadcrumbs,
    icon,
    imageSlider,
    labelMark,
    rating
  },

  data() {
    return {
      slides: [
        {
          image: '/images/slide1.jpg'
        },
        {
          image: '/images/slide1.jpg'
        }
      ]
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
