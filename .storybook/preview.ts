import type { Preview } from "@storybook/html-vite";
// import { defaultConfig } from 'storybook-addon-tag-badges/manager-helpers'
import { tagBadges } from './tagBadges'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
