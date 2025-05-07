import { addons } from '@storybook/manager-api';
import { defaultConfig, type TagBadgeParameters } from 'storybook-addon-tag-badges';

addons.setConfig({
  tagBadges: [
    {
      badge: {
        bgColor: '#F99B58',
        fgColor: '#FFFFFF',
        text: 'Unstable',
        tooltip: 'This component is unstable and may change'
      },
      display: {
        sidebar: ['component'],
        toolbar: true
      },
      tags: 'unstable'
    },
    {
      badge: {
        bgColor: '#729DFF',
        fgColor: '#FFFFFF',
        text: 'Beta',
        tooltip: 'This component is unstable and may change'
      },
      display: {
        sidebar: ['component'],
        toolbar: true
      },
      tags: 'beta'
    },
    {
      badge: {
        bgColor: '#24A148',
        fgColor: '#FFFFFF',
        text: 'Stable',
        tooltip: 'This component is stable'
      },
      display: {
        sidebar: [],
        toolbar: true
      },
      tags: 'stable'
    },
    ...defaultConfig
  ] satisfies TagBadgeParameters,
});