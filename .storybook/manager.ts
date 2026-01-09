import { addons } from 'storybook/manager-api';
import { defaultConfig, type TagBadgeParameters } from 'storybook-addon-tag-badges/manager-helpers';
import { tagBadges } from './tagBadges'

addons.setConfig({
  tagBadges: [
    ...tagBadges,
    ...defaultConfig
  ] satisfies TagBadgeParameters,
});