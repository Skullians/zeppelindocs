import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "ZeppelinMC",
  description: "Documentation dedicated towards ZeppelinMC.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Get Started', link: '/start/get-started.md' }
    ],

    sidebar: [
      {
        text: 'Get Started',
        items: [
          { text: 'Installation', link: '/start/get-started.md' },
          { text: 'Configuration', link: '/start/configuration.md' },
          { text: 'Roadmap', link: '/roadmap.md' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ZeppelinMC/Zeppelin' },
      { icon: 'discord', link: 'https://discord.gg/T8qEtDWPak' }
    ]
  }
})
