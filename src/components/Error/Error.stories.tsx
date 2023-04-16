import type { Meta, StoryObj } from '@storybook/react';

import Error from '.';

const meta: Meta<typeof Error> = {
  title: 'Component/Error',
  component: Error,
};

export default meta;
type Story = StoryObj<typeof Error>;

export const ErrorMessage: Story = {
  args: {},
};
