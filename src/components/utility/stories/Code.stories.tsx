import type { Meta, StoryObj } from '@storybook/react';

import Code from '../Code';

const meta: Meta<typeof Code> = {
  title: 'Component/Code',
  component: Code,
};

export default meta;
type Story = StoryObj<typeof Code>;

// 👇 Throws a type error it the args don't match the component props
export const Primary: Story = {
  args: {},
};