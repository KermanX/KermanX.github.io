import { defineConfig } from 'vitepress'
import { fileURLToPath } from 'url'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "_Kerman",
  description: "-",
  themeConfig: {
    // nav: [
    //   { text: 'Home', link: '/' },
    //   { text: 'Examples', link: '/markdown-examples' }
    // ],

    sidebar: [
      {
        text: 'Home',
        link: '/',
      }
    ],
  },
  appearance: 'force-dark',
  head: [
    [
      'link',
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: 'https://cdn.jsdelivr.net/npm/@fontsource-variable/league-spartan@5.1.1/index.min.css',
      }
    ],
    [
      'link',
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: 'https://cdn.jsdelivr.net/npm/@fontsource/noto-sans-sc@5.1.1/index.min.css',
      }
    ]
  ]
})
