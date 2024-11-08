import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Ukalus_dev",
  description: "Sammlung an informationen für die Abschlussprüfungen für Fachinformatiker, besonderer fokus auf Teil 2",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Allgemein:',
        items: [
          { text: 'Über diese Seite', link: '/about' },
          { text: 'Beteiligung', link: '/contribute' },
          { text: 'Fehler, Bugs, Reporting', link: '/error_reporting' }
        ]
      },
      {
        text: 'Abschlussprüfung Teil 1:',
        items: [
          { text: 'Prüfungsvorbereitung', link: 'teil1/pruefungsvorbereitung' },
        ]
      },
      {
        text: 'Abschlussprüfung Teil 2:',
        items: [
          { text: 'Prüfungsvorbereitung', link: 'teil2/pruefungsvorbereitung' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Ukalus' }
    ]
  }
})
