import type { Meta, StoryObj } from '@storybook/html';
import { fn } from '@storybook/test';

import type { UnstableButtonProps } from './UnstableButton';
import { createUnstableButton } from './UnstableButton';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/UnstableButton',
  tags: ['autodocs', 'beta', 'unstable', 'deprecated', 'version:1.0.0'],
  render: (args) => {
    // You can either use a function to create DOM elements or use a plain html string!
    // return `<div>${label}</div>`;
    return createUnstableButton(args);
  },
  argTypes: {
    backgroundColor: { control: 'color' },
    label: { control: 'text' },
    onClick: { action: 'onClick' },
    primary: { control: 'boolean' },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<UnstableButtonProps>;

export default meta;
type Story = StoryObj<UnstableButtonProps>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    primary: true,
    label: 'UnstableButton',
  },
};

export const Secondary: Story = {
  args: {
    label: 'UnstableButton',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    label: 'UnstableButton',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    label: 'UnstableButton',
  },
};
