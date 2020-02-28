const platformDetect = process.browser
  ? require('assets/helpers/platformDetect.js')
  : null;

const scrollBarHelper = process.browser
  ? require('assets/helpers/scrollBarHelper.js')
  : null;

export default {
  state: () => {
    return {
      currentLayout: null,
      fontSize: 0,
      isLoad: null,
      isMobilePlatform: platformDetect ? platformDetect.detectMobile.isMobile : null,
      isReady: null,
      sizes: null,
      uiColor: 'black',
      scrollBar: {
        width: scrollBarHelper ? scrollBarHelper.getScrollBarWidth() : null
      }
    };
  },
  mutations: {
    setAppReady(state, payload) {
      state.isReady = payload;
    },
    setAppLoad(state, payload) {
      state.isLoad = payload;
    },
    setCurrentLayout(state, device) {
      state.currentLayout = device;
    },
    setFontSize(state, payload) {
      state.fontSize = payload;
    },
    setSizes(state, payload) {
      state.sizes = payload;
    },
    setUiColor(state, payload) {
      state.uiColor = payload;
    },
    setIsMobilePlatform(state) {
      state.isMobilePlatform = platformDetect ? platformDetect.detectMobile.isMobile : null;
    }
  },
  getters: {
    isMobile: state => {
      return state.currentLayout === 'mobile';
    },
    isTablet: state => {
      return state.currentLayout === 'tablet';
    },
    isDesktop: state => {
      return state.currentLayout === 'desktop';
    }
  }
};
