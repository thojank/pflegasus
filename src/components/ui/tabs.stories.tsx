import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { expect } from 'storybook/test'

import { Tabs, TabsContent, TabsList, TabsTrigger } from './tabs'

const meta = {
  component: Tabs,
  tags: ['ai-generated'],
} satisfies Meta<typeof Tabs>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Tabs defaultValue="overview" className="w-full max-w-lg">
      <TabsList>
        <TabsTrigger value="overview">Uebersicht</TabsTrigger>
        <TabsTrigger value="documents">Dokumente</TabsTrigger>
        <TabsTrigger value="history">Verlauf</TabsTrigger>
      </TabsList>
      <TabsContent value="overview">Heute 5 Einsaetze geplant.</TabsContent>
      <TabsContent value="documents">3 Dokumente fehlen.</TabsContent>
      <TabsContent value="history">Letzte Aktualisierung vor 10 Minuten.</TabsContent>
    </Tabs>
  ),
  play: async ({ canvas, userEvent }) => {
    await userEvent.click(canvas.getByRole('tab', { name: /dokumente/i }))
    await expect(canvas.getByText(/3 dokumente fehlen/i)).toBeVisible()
  },
}

export const LineVariant: Story = {
  render: () => (
    <Tabs defaultValue="team" className="w-full max-w-lg">
      <TabsList variant="line">
        <TabsTrigger value="team">Team</TabsTrigger>
        <TabsTrigger value="tour">Tour</TabsTrigger>
      </TabsList>
      <TabsContent value="team">Teamansicht aktiv.</TabsContent>
      <TabsContent value="tour">Touransicht aktiv.</TabsContent>
    </Tabs>
  ),
}

export const Vertical: Story = {
  render: () => (
    <Tabs defaultValue="one" orientation="vertical" className="max-w-lg">
      <TabsList>
        <TabsTrigger value="one">Pflege</TabsTrigger>
        <TabsTrigger value="two">Haushalt</TabsTrigger>
      </TabsList>
      <TabsContent value="one">Leistungspfad Pflege.</TabsContent>
      <TabsContent value="two">Leistungspfad Haushalt.</TabsContent>
    </Tabs>
  ),
}
