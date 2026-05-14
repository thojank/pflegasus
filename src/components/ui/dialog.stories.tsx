import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { expect, within } from 'storybook/test'

import { Button } from './button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './dialog'

const meta = {
  component: Dialog,
  tags: ['ai-generated'],
} satisfies Meta<typeof Dialog>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger render={<Button />}>Einsatz oeffnen</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Einsatz bearbeiten</DialogTitle>
          <DialogDescription>
            Bitte pruefe die Leistungszeiten und speichere die Aenderungen.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter showCloseButton>
          <Button>Speichern</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
  play: async ({ canvas, canvasElement, userEvent }) => {
    await userEvent.click(canvas.getByRole('button', { name: /einsatz oeffnen/i }))
    await expect(
      await within(canvasElement.ownerDocument.body).findByText(/einsatz bearbeiten/i)
    ).toBeVisible()
  },
}

export const WithoutIconClose: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger render={<Button variant="outline" />}>Statusdialog</DialogTrigger>
      <DialogContent showCloseButton={false}>
        <DialogHeader>
          <DialogTitle>Synchronisierung</DialogTitle>
          <DialogDescription>
            Alle Daten wurden erfolgreich synchronisiert.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter showCloseButton>
          <Button>Verstanden</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
}

export const Descriptive: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger render={<Button variant="secondary" />}>Hinweis anzeigen</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Hinweis</DialogTitle>
          <DialogDescription>
            Der Termin ueberschneidet sich mit einem anderen Einsatz.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  ),
}
