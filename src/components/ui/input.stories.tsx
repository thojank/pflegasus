import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { expect } from 'storybook/test'

import { Input } from './input'

const meta = {
  component: Input,
  tags: ['ai-generated'],
  args: {
    placeholder: 'E-Mail eingeben',
    type: 'email',
  },
  render: (args) => (
    <div className="grid gap-2 max-w-sm">
      <label htmlFor="mail">E-Mail</label>
      <Input id="mail" {...args} />
    </div>
  ),
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  play: async ({ canvas }) => {
    await expect(canvas.getByLabelText(/e-mail/i)).toBeVisible()
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    value: 'kontakt@pflegasus.de',
  },
}

export const Invalid: Story = {
  args: {
    'aria-invalid': true,
    value: 'ungueltig@',
  },
}
