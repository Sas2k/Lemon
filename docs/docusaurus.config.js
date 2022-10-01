// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Lemon 🍋 - docs',
  tagline: 'A Full-Stack Framework for Python',
  url: 'https://sas2k.github.io/',
  baseUrl: '/Lemon/',
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Sas2k', // Usually your GitHub org/user name.
  projectName: 'Lemon', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/Sas2k/Lemon/tree/main/docs/Lemon-Docs',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/Sas2k/Lemon/tree/main/docs/Lemon-Docs',
        },
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
        title: 'Lemon',
        logo: {
          alt: ':lemon:',
          src: 'img/favicon.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'table',
            position: 'left',
            label: 'Docs',
          },
          {
            type: 'doc',
            docId: 'lemon-in-3min',
            position: 'left',
            label: 'Quick-Start',
          },
          {
            type: 'doc',
            docId: 'tutorial/intro-to-tutorial',
            position: 'left',
            label: 'Tutorial',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/Sas2k/Lemon',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/lemon-in-3min',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/lemon',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/wg239Cpf',
              }
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/Sas2k/Lemon',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Lemon, Built with ❤ and Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
