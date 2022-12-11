export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Kiramei Official Site',
    htmlAttrs: {
      lang: 'jp'
    },
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: ''
      },
      {
        name: 'format-detection',
        content: 'telephone=no'
      }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: 'https://kiramei.cn/former/favicon.ico'
    }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{src:'plugin/last.js' ,ssr:false} ,{src:'plugin/common.js' ,ssr:false} ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [ 'cookie-universal-nuxt',['cookie-universal-nuxt', {
      parseJSON: true
    }] ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
}
