import { Story, Meta } from '@storybook/react/types-6-0'
import Button from '.'

export default {
  title: 'Atoms/Button',
  component: Button,
} as Meta

export const Default: Story = (args) => <Button text="Salvar" />
