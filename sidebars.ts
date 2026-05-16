import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docs: [
    'intro',
    {
      type: 'category',
      label: 'Modules',
      items: [
        'modules/ownable',
        'modules/access-control',
        'modules/pausable',
        'modules/reentrancy-guard',
        'modules/rate-limiter',
        'modules/multi-sig',
        'modules/upgradeable',
      ],
    },
    {
      type: 'category',
      label: 'Guides',
      items: [
        'guides/composing-modules',
        'guides/testing-with-shield',
        'guides/deploying',
        'guides/contributing',
      ],
    },
    {
      type: 'category',
      label: 'Security',
      items: ['security/overview', 'security/audit-rules', 'security/disclosure'],
    },
    {
      type: 'category',
      label: 'Migration',
      items: ['migration/overview', 'migration/v0-to-v1'],
    },
  ],
};

export default sidebars;
