import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { expect } from 'storybook/test'

import Home from './page'

const meta = {
  component: Home,
  tags: ['ai-generated'],
} satisfies Meta<typeof Home>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Smoke: Story = {
  play: async ({ canvas }) => {
    await expect(
      canvas.getByRole('link', { name: /documentation/i })
    ).toHaveAttribute('href', expect.stringContaining('nextjs.org/docs'))
  },
}
