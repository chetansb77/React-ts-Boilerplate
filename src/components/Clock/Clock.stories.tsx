import type { Meta, StoryObj } from '@storybook/react';

import Clock from '.';

const meta: Meta<typeof Clock> = {
  title: 'Component/Clock',
  component: Clock,
};

export default meta;
type Story = StoryObj<typeof Clock>;

// 👇 Throws a type error it the args don't match the component props
export const LongDate: Story = {
  args: { timeType: 'long' },
};

export const ShortDate: Story = {
  args: { timeType: 'short' },
};
