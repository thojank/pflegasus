import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { AlertCircleIcon } from 'lucide-react'

import { Button } from './button'
import { Alert, AlertAction, AlertDescription, AlertTitle } from './alert'

const meta = {
  component: Alert,
  tags: ['ai-generated'],
} satisfies Meta<typeof Alert>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Alert className="max-w-md">
      <AlertCircleIcon />
      <AlertTitle>Hinweis</AlertTitle>
      <AlertDescription>
        Die Tourenplanung fuer morgen wurde automatisch aktualisiert.
      </AlertDescription>
    </Alert>
  ),
}

export const Destructive: Story = {
  render: () => (
    <Alert variant="destructive" className="max-w-md">
      <AlertCircleIcon />
      <AlertTitle>Aktion erforderlich</AlertTitle>
      <AlertDescription>
        Die Unterschrift fuer den Einsatzbericht fehlt noch.
      </AlertDescription>
      <AlertAction>
        <Button size="sm" variant="destructive">
          Pruefen
        </Button>
      </AlertAction>
    </Alert>
  ),
}

export const WithLink: Story = {
  render: () => (
    <Alert className="max-w-md">
      <AlertCircleIcon />
      <AlertTitle>Systemmeldung</AlertTitle>
      <AlertDescription>
        <a href="#">Mehr Informationen</a> zur Datensynchronisierung verfuegbar.
      </AlertDescription>
    </Alert>
  ),
}
