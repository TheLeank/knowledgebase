module.exports = {
  title: 'Base de conocimiento',
  tagline: 'Se acabaron los ficheros de texto y los marcadores',
  url: 'https://kb.leank.es',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'jrvdaw', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Base de conocimiento',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },

    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} jrvdaw's knowledgebase. Docusaurus ftw.`,
    },
    // algolia: {
    //   apiKey: 'ALGOLIA_APIKEY',
    //   indexName: 'prod_kb',
    //   // appId: 'app-id', // Optional, if you run the DocSearch crawler on your own
    //   // algoliaOptions: {}, // Optional, if provided by Algolia
    // },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          routeBasePath: '/',
          homePageId: 'linux',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/TheLeank/knowledgebase/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
