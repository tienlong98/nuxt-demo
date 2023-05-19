export default defineNuxtConfig({
    modules: ['@element-plus/nuxt'],
    runtimeConfig: {
        public: {
          baseUrl: "process.env.BASE_URL",
        },
      },
      // nitro: {
      //   storage: {
      //     'mysql': {
      //       driver: 'mysql',
      //       /* redis connector options */
      //       port: 3306, // Redis port
      //       host: "127.0.0.1", // Redis host
      //       username: "root", // needs Redis >= 6
      //       password: "",
      //       db: nuxtauth, // Defaults to 0
      //       tls: {} // tls/ssl
      //     }
      //   }
      // }
})


