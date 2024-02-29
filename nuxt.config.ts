// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  app: {
    head: {
      meta: [
        // <meta name="viewport" content="width=device-width, initial-scale=1">
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'author', content: 'https://boich.ru | ARTEM BOYKO' },
      ],
      title: 'Travel',
      htmlAttrs: {
        lang: 'en'
      },
      script: [
        // <script src="https://myawesome-lib.js"></script>
       // { src: 'https://awesome-lib.js' }
      ],
      link: [
        // <link rel="stylesheet" href="https://myawesome-lib.css">
       // { rel: 'stylesheet', href: 'https://awesome-lib.css' }
      { rel: 'stylesheet', href: '~/assets/css/main.css' }
      ],
      // please note that this is an area that is likely to change
      style: [
        // <style type="text/css">:root { color: red }</style>
        { children: ':root { color: red }', type: 'text/css' }
      ],
      noscript: [
        // <noscript>JavaScript is required</noscript>
        { children: 'JavaScript is required' }
      ]
    }
  },
 modules: [
  '@nuxtjs/color-mode',
  '@pinia/nuxt',
  '@nuxt/ui',
  'nuxt-primevue',
  'nuxt-aos',
  '@nuxt/image',
  
],
image: {
},
 primevue: {
    // usePrimeVue: true,
  /* Options */
    options: {
        
        //unstyled: false,
        //inputStyle: 'filled'
        //ripple: true,
    },
  //   components: {
  //     //prefix: 'Prime',
  //     //include: '*'
  // }
},
css: [
  // Load a Node.js module directly (here it's a Sass file).
  // 'bulma',
  // CSS file in the project
  'primevue/resources/themes/aura-light-green/theme.css',
  'primevue/resources/primevue.css',
  'primeicons/primeicons.css',
  '~/assets/css/main.css',
  // SCSS file in the project
  '~/assets/css/main.scss',
  //'primeflex/primeflex.css',
  //'~/assets/css/tailwind.css'
],
title: 'Hello Nuxt',
// theme: {
//   dark: false,
//   light: true,
//   colors: {
//     primary: '#ff0000'
//   }
// },
colorMode: {
  preference: 'light'
}
})
