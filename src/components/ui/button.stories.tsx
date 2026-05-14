import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { expect } from 'storybook/test'

import { Button } from './button'

const meta = {
  component: Button,
  tags: ['ai-generated'],
  args: {
    children: 'Aktion',
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    variant: 'default',
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('button', { name: /aktion/i })).toBeVisible()
  },
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
  },
}

export const Outline: Story = {
  args: {
    variant: 'outline',
  },
}

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    children: 'Loeschen',
  },
}

export const CssCheck: Story = {
  args: {
    children: 'Submit',
  },
  play: async ({ canvas }) => {
    const button = canvas.getByRole('button', { name: /submit/i })
    await expect(getComputedStyle(button).fontSize).toBe('14px')
  },
}
