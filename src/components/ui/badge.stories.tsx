import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Badge } from './badge'

const meta = {
  component: Badge,
  tags: ['ai-generated'],
  args: {
    children: 'Status',
  },
} satisfies Meta<typeof Badge>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Neu',
  },
}

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'In Pruefung',
  },
}

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    children: 'Kritisch',
  },
}
