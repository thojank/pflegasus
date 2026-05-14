import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { expect, within } from 'storybook/test'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from './select'

const meta = {
  component: Select,
  tags: ['ai-generated'],
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Select defaultValue="high">
      <SelectTrigger className="w-56">
        <SelectValue placeholder="Prioritaet waehlen" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Prioritaet</SelectLabel>
          <SelectItem value="low">Niedrig</SelectItem>
          <SelectItem value="medium">Mittel</SelectItem>
          <SelectItem value="high">Hoch</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  ),
  play: async ({ canvas, canvasElement, userEvent }) => {
    await userEvent.click(canvas.getByRole('combobox'))
    await expect(
      await within(canvasElement.ownerDocument.body).findByRole('option', { name: /mittel/i })
    ).toBeVisible()
  },
}

export const WithGroups: Story = {
  render: () => (
    <Select>
      <SelectTrigger className="w-56">
        <SelectValue placeholder="Status waehlen" />
      </SelectTrigger>
      <SelectContent>
        <SelectLabel>Aktiv</SelectLabel>
        <SelectItem value="new">Neu</SelectItem>
        <SelectItem value="in-progress">In Bearbeitung</SelectItem>
        <SelectSeparator />
        <SelectLabel>Abgeschlossen</SelectLabel>
        <SelectItem value="done">Erledigt</SelectItem>
      </SelectContent>
    </Select>
  ),
}

export const Small: Story = {
  render: () => (
    <Select defaultValue="daily">
      <SelectTrigger size="sm" className="w-44">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="daily">Taeglich</SelectItem>
        <SelectItem value="weekly">Woechentlich</SelectItem>
      </SelectContent>
    </Select>
  ),
}
