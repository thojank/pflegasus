import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { expect } from 'storybook/test'

import { Textarea } from './textarea'

const meta = {
  component: Textarea,
  tags: ['ai-generated'],
  args: {
    placeholder: 'Notiz zum Einsatz...',
  },
  render: (args) => (
    <div className="grid gap-2 max-w-md">
      <label htmlFor="note">Notiz</label>
      <Textarea id="note" {...args} />
    </div>
  ),
} satisfies Meta<typeof Textarea>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  play: async ({ canvas }) => {
    await expect(canvas.getByLabelText(/notiz/i)).toBeVisible()
  },
}

export const Prefilled: Story = {
  args: {
    defaultValue: 'Kundin war zufrieden, naechster Termin am Freitag.',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    defaultValue: 'Abgeschlossen',
  },
}
