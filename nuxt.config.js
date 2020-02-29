const modulesConfig = require('config');

const path = require('path');
const SvgStore = require('webpack-svgstore-plugin');

const isStylusRule = rule => {
  return rule.test.toString() === '/\\.styl(us)?$/i';
};

const stylusResourcesLoader = {
  loader: 'stylus-loader',
  options: {
    import: path.join(__dirname, 'assets/stylesheets/common/global.styl')
  }
};

const title = 'Tour';
const keywords = '';
const description = '';
const ogImage = '';

export default {
  head: {
    title: title,
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {'http-equiv': 'X-UA-Compatible', content: 'IE=edge'},
      {name: 'msapplication-TileColor', content: '#000000'},
      {name: 'msapplication-TileImage', content: '/mstile-144x144.png'},
      {name: 'theme-color', content: '#000000'},
      {hid: 'description', name: 'description', content: description},
      {hid: 'keywords', name: 'keywords', content: keywords},
      {hid: 'ogtitle', property: 'og:title', content: title},
      {hid: 'ogdescription', property: 'og:description', content: description},
      {hid: 'ogimage', property: 'og:image', content: ogImage}
    ],
    link: [
      {rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png'},
      {rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png'},
      {rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png'},
      {rel: 'manifest', href: '/site.webmanifest'},
      {rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#000000'}
    ]
  },
  generate: {
    interval: 100,
    minify: {
      collapseWhitespace: false
    },
    dir: 'dist'
  },
  modules: [
    '@nuxtjs/axios',
    ['@nuxtjs/moment', modulesConfig.get('moment')]
  ],
  plugins: [
    '~plugins/axios',
    '~plugins/filters.js',
    '~plugins/directives.js',
    '~plugins/svgstore.js',
    '~plugins/gsap.js',
    {src: '~plugins/swiper.js', ssr: false},
    '~/plugins/static-mixin.js'
  ],
  router: {
    base: process.env.DEPLOY_ENV === 'GH_PAGES' ? '/tour-example/' : '/',
    middleware: [
      'theme'
    ]
  },
  axios: modulesConfig.get('axios'),
  css: [
    '~assets/stylesheets/application.styl',
    'swiper/dist/css/swiper.css'
  ],
  loading: false,
  build: {
    babel: {
      plugins: ['@babel/plugin-proposal-optional-chaining']
    },
    // extractCSS: true,
    vendor: [
      'babel-polyfill'
    ],
    plugins: [
      new SvgStore({
        svgoOptions: {
          plugins: [
            {
              removeTitle: true,
              removeViewBox: true,
              sortAttrs: true,
              addClassesToSVGElement: true,
              addAttributesToSVGElement: true,
              removeStyleElement: true,
              convertStyleToAttrs: true
            }
          ]
        },
        prefix: 'icon-'
      })
    ],
    extend(config) {
      config.module.rules.forEach(rule => {
        if (isStylusRule(rule)) {
          rule.oneOf.forEach(item => {
            item.use.push(stylusResourcesLoader);
          });
        }
      });
    }
  }
};
