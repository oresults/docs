// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'OResults User Guide',
  tagline: 'powered by Bluebox',
  url: 'https://docs.oresults.eu',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'OResults', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'cs'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //  'https://github.com/oresults/docs/tree/main/',
        },
        blog: false /*{

          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        }*/,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'User Guide',
        logo: {
          alt: 'OResults logo',
          src: 'img/oresults-icon-blue.svg',
          srcDark: 'img/oresults-icon-white.svg',
        },
        items: [
          {to: '/', label: 'Docs', position: 'left'},
          {to: '/whats-new', label: 'Changelog', position: 'left'},
          {
            type: 'localeDropdown',
            position: 'right'
          },
          {
            href: 'https://oresults.eu',
            label: 'OResults',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} Otakar Hirš, Jan Jurica`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),

  plugins: [
    ['@dipakparmar/docusaurus-plugin-umami', {
      // options
      websiteID: "3b9947ae-d41b-4d90-8317-eab5e8afaa92", // Required
      analyticsDomain: "analytics.oresults.eu", // Required
      dataAutoTrack: true,
      dataDoNoTrack: true,
      dataCache: true,
    }],
  ],
};

module.exports = config;
