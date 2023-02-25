import { Story, Meta } from '@storybook/react/types-6-0'
import AddButton from '.'

export default {
  title: 'Atoms/AddButton',
  component: AddButton,
} as Meta

export const Default: Story = (args) => <AddButton {...args} />
Default.args = { isVariant: true }
