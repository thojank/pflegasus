import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Button } from './button'

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './card'

const meta = {
  component: Card,
  tags: ['ai-generated'],
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Card className="max-w-md">
      <CardHeader>
        <CardTitle>Besuchsdokumentation</CardTitle>
        <CardDescription>Naechster Termin heute 16:30 Uhr</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Kunde: Musterpflege GmbH</p>
      </CardContent>
      <CardFooter>
        <Button size="sm">Details</Button>
      </CardFooter>
    </Card>
  ),
}

export const WithAction: Story = {
  render: () => (
    <Card className="max-w-md">
      <CardHeader>
        <CardTitle>Einsatzplanung</CardTitle>
        <CardDescription>3 offene Aufgaben</CardDescription>
        <CardAction>
          <Button variant="outline" size="sm">
            Bearbeiten
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <p>Prioritaet: Hoch</p>
      </CardContent>
    </Card>
  ),
}

export const Small: Story = {
  render: () => (
    <Card size="sm" className="max-w-md">
      <CardHeader>
        <CardTitle>Kurzhinweis</CardTitle>
        <CardDescription>Dokumentation abgeschlossen</CardDescription>
      </CardHeader>
    </Card>
  ),
}
