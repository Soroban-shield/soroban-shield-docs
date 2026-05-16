import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';

const config: Config = {
  title: 'Soroban Shield',
  tagline: 'Secure Soroban smart contract components',
  favicon: 'img/favicon.ico',
  url: 'https://soroban-shield.github.io',
  baseUrl: '/soroban-shield-docs/',
  organizationName: 'Soroban-shield',
  projectName: 'soroban-shield-docs',
  onBrokenLinks: 'throw',
  i18n: { defaultLocale: 'en', locales: ['en'] },
  presets: [
    [
      'classic',
      {
        docs: { sidebarPath: './sidebars.ts' },
        theme: { customCss: './src/css/custom.css' },
      },
    ],
  ],
  themeConfig: {
    navbar: {
      title: 'Soroban Shield',
      items: [
        { type: 'docSidebar', sidebarId: 'docs', position: 'left', label: 'Docs' },
        { href: 'https://github.com/Soroban-shield', label: 'GitHub', position: 'right' },
      ],
    },
    prism: { theme: prismThemes.github, darkTheme: prismThemes.dracula },
  },
};

export default config;
