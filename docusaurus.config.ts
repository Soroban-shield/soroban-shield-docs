import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';

const config: Config = {
  title: 'Soroban Shield',
  tagline: 'Secure Soroban smart contract components',
  favicon: 'img/logo.svg',
  url: 'https://soroban-shield.github.io',
  baseUrl: '/soroban-shield-docs/',
  organizationName: 'Soroban-shield',
  projectName: 'soroban-shield-docs',
  onBrokenLinks: 'warn',
  i18n: { defaultLocale: 'en', locales: ['en'] },
  presets: [[ 'classic', { docs: { sidebarPath: './sidebars.ts', editUrl: 'https://github.com/Soroban-shield/soroban-shield-docs/tree/main/' }, blog: false, theme: { customCss: './src/css/custom.css' } } ]],
  themeConfig: {
    navbar: { title: 'Soroban Shield', logo: { src: 'img/logo.svg' }, items: [{ type: 'docSidebar', sidebarId: 'docs', label: 'Docs' }, { href: 'https://github.com/Soroban-shield', label: 'GitHub' }] },
    footer: { copyright: `Copyright © ${new Date().getFullYear()} Soroban Shield` },
    prism: { theme: prismThemes.github, darkTheme: prismThemes.dracula },
  },
};
export default config;
