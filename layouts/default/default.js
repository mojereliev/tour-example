import {mapState, mapGetters, mapMutations} from 'vuex';
import {TimelineMax, CSSPlugin, TweenMax, EasePack} from 'gsap'; // eslint-disable-line

import headerModule from '~/components/header/header.vue';

import throttle from 'assets/helpers/throttle';
import {fadeIn, fadeOut} from 'assets/helpers/animations.js';

const fontSizeHelper = process.browser
  ? require('assets/helpers/fontSizeHelper')
  : null;

const SwipeDetect = process.browser
  ? require('assets/helpers/swipeDetect').default
  : null;

export default {
  components: {
    headerModule
  },

  data() {
    return {
      fadeIn: fadeIn,
      fadeOut: fadeOut,

      onKeyDown: null,

      menuIsOpen: false
    };
  },

  // head() {
  //   return {
  //     title: this.commonData.meta.title,
  //     meta: [
  //       {hid: 'ogtitle', property: 'og:title', content: this.commonData.meta.title},
  //       {hid: 'description', name: 'description', content: this.commonData.meta.description},
  //       {hid: 'ogdescription', property: 'og:description', content: this.commonData.meta.description},
  //       {hid: 'ogimage', property: 'og:image', content: this.commonData.meta.og_image}
  //     ]
  //   };
  // },

  computed: {
    ...mapState([
      'app',
      'commonData',
      'mobileButtonActivity'
    ]),

    ...mapGetters([
      'isMobile'
    ])
  },

  watch: {
    isMobile() {
      if (!this.isMobile) {
        this.menuIsOpen = false;
      }
    },

    '$route.name'() {
      this.menuIsOpen = false;
    }
  },

  created: function () {
    if (process.browser) {
      switch (document.readyState) {
        case 'loading':
          document.addEventListener('DOMContentLoaded', () => {
            this.setAppReady(true);
          });

          window.onload = () => {
            this.setAppLoad(true);
          };
          break;

        case 'interactive':
          this.setAppReady(true);

          window.onload = () => {
            this.setAppLoad(true);
          };
          break;

        case 'complete':
          this.setAppReady(true);
          this.setAppLoad(true);
          break;
      }
    }
  },

  mounted: function () {
    this.setIsMobilePlatform();
    this.setLayoutType();
    this.setFontSize(fontSizeHelper.update(this.app.currentLayout));
    this.saveSizes();

    const onWindowResize = throttle(() => {
      this.setLayoutType();
      this.setFontSize(fontSizeHelper.update(this.app.currentLayout));
      this.saveSizes();
    }, 100);

    window.addEventListener('resize', onWindowResize);

    window.addEventListener('keydown', this.onKeyDown);

    if (SwipeDetect) {
      const swipeDetect = new SwipeDetect({
        element: this.$el
      }, e => {
        switch (e) {
          case 'up':
            this.$root.$emit('onNavigateDown');
            break;
          case 'down':
            this.$root.$emit('onNavigateUp');
            break;
        }
      });
      swipeDetect.run();
    }
  },

  methods: {
    ...mapMutations([
      'setAppReady',
      'setAppLoad',
      'setCurrentLayout',
      'setFontSize',
      'setSizes',
      'setIsMobilePlatform'
    ]),

    saveSizes() {
      const sizes = {
        viewport: {
          width: window.innerWidth,
          height: window.innerHeight
        }
      };

      this.setSizes(sizes);
    },

    menuBtnClick() {
      if (this.mobileButtonActivity) {
        if (this.$route.name === 'index-cases-id') {
          this.$router.push({name: 'index'});
        } else if (this.menuIsOpen) {
          this.menuIsOpen = false;
        } else {
          this.menuIsOpen = true;
        }
      }
    },

    setLayoutType() {
      const mqMobile = window.matchMedia('only screen and (max-width: 46.9em)');
      const mqTablet = window.matchMedia('only screen and (max-width: 80em)');

      if (mqMobile.matches) {
        this.setCurrentLayout('mobile');
      } else if (mqTablet.matches) {
        this.setCurrentLayout('tablet');
      } else {
        this.setCurrentLayout('desktop');
      }
    }
  }
};
