import { Story, Meta } from '@storybook/react/types-6-0'
import Label from '.'

export default {
  title: 'Atoms/Label',
  component: Label,
} as Meta

export const Default: Story = (args) => <Label {...args} />
Default.args = {}
