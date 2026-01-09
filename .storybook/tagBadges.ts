import { TagBadgeParameters } from "storybook-addon-tag-badges/manager-helpers";

export const tagBadges = [
  {
    badge: {
      style: 'orange',
      text: 'Unstable',
      tooltip: 'This component is unstable and may change'
    },
    tags: 'unstable'
  } ,
  {
    badge: {
      style: 'blue',
      text: 'Beta',
      tooltip: 'This component is unstable and may change'
    },
    tags: 'beta'
  },
  {
    badge: {
      style: 'green',
      text: 'Stable',
      tooltip: 'This component is stable'
    },
    display: {
      sidebar: false,
      toolbar: true
    },
    tags: 'stable'
  }
] satisfies TagBadgeParameters