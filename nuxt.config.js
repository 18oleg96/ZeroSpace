export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'ZeroSpace',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
    script: [],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/styles/global.scss',
    '~/styles/variables.scss',
  ],

  buildModules: [
    '@nuxtjs/style-resources',
    'nuxt-compress'
  ],

  styleResources: {
    scss: [
      
    ]
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~plugins/aos', ssr: false },
    { src: '~plugins/gsap', ssr: false },
    { src: '~plugins/flowAdaptiveVue', ssr: false },
    { src: '~/plugins/globalEvents', mode: 'client', },
    { src: "~/plugins/click-outside.js", ssr: false },
    { src: "~/plugins/clipboard.js", ssr: false },
    { src: "~/plugins/vue-modaltor.js", ssr: false },
    { src: "~/plugins/scrollspy.js", ssr: false },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    [
      '@nuxtjs/component-cache', {
      max: 10000,
      maxAge: 1000 * 60 * 60
      }
    ],

    [
      'nuxt-compress',
      {
        gzip: {
          threshold: 8192,
        },
        brotli: {
          threshold: 8192,
        },
      },
    ],

    [
      'vue-scrollto/nuxt', 
      { 
        duration: 1000,
      }
    ],
    [
      "@nuxtjs/toast"
    ],
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    
  },
  router: {
    base: '/zero/'
  },

  server: {
    port: 8000,
    host: "0.0.0.0"
  }
}
