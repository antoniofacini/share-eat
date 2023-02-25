import { Story, Meta } from '@storybook/react/types-6-0'
import InputField from '.'

export default {
  title: 'Molecules/InputField',
  component: InputField,
} as Meta

export const Default: Story = (args) => <InputField {...args} />
Default.args = {}
