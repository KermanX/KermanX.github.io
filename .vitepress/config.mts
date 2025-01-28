import { withMermaid } from "vitepress-plugin-mermaid";

export default withMermaid({
  title: "_Kerman",
  description: "",
  themeConfig: {
    siteTitle: "_Kerman",
    sidebar: [
      {
        text: 'Home',
        link: '/',
      },
      {
        text: 'Notes',
        items: [
          {
            text: 'Static Program Analysis',
            link: '/notes/spa'
          }
        ]
      }
    ],
  },
  markdown: {
    theme: 'dark-plus',
    math: true,
  },
  appearance: 'force-dark',
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/favicon.ico',
      }
    ],
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
