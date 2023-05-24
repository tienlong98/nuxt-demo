export default defineNuxtConfig({
  modules: [
    '@element-plus/nuxt',
    // '@nuxt/image-edge',
  ],

  runtimeConfig: {
    public: {
      baseUrl: "process.env.BASE_URL",
    },
    serverMiddleware: [
      {
        path: '/api/uploads',
        handler: '~/api/uploads/index.ts'
      }
    ],
  },

})


