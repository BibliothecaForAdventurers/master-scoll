// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Master Scroll',
  tagline: '"Empires rise and fall in the quest for control of Resources and Ancient Relics within an eternal world. Maintain and defend your empire or it will fall into disarray and be consumed by enemies."',
  url: 'https://scroll.bibliothecadao.xyz/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'BibliothecaDAO', // Usually your GitHub org/user name.
  projectName: 'master-scroll', // Usually your repo name.

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
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/BibliothecaForAdventurers/master-scoll/blob/master/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/BibliothecaForAdventurers/master-scoll/blob/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  plugins: [
    async function myPlugin(context, options) {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require("tailwindcss"));
          postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
        },
      };
    },
  ],
  themeConfig:
  
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },

      navbar: {
        title: 'Master Scroll',
        logo: {
          alt: 'Bibliotheca Book',
          src: 'img/book.svg',
        },
        items: [
          {
            href: 'https://github.com/BibliothecaForAdventurers/master-scoll',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },

      footer: {
        style: 'light',
        links: [

          {
            title: 'COMMUNITY',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/RW86nkMb',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/lootrealms',
              },
            ],
          },
          {
            title: 'MORE',
            items: [
              {
                label: 'Atlas',
                href: 'https://atlas.bibliothecadao.xyz/',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/BibliothecaForAdventurers',
              },
            ],
          },
        ],
        copyright: `cc0 | ${new Date().getFullYear()} | BibliothecaDAO`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
