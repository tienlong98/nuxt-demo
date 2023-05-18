export default defineNuxtConfig({
    modules: ['@element-plus/nuxt'],
    runtimeConfig: {
        public: {
          baseUrl: "process.env.BASE_URL",
        },
      },
})


