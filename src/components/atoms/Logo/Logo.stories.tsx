import { Story, Meta } from '@storybook/react/types-6-0'
import ItemDescription from '.'

export default {
  title: 'Molecules/ItemDescription',
  component: ItemDescription,
} as Meta

export const Default: Story = (args) => <ItemDescription {...args} />
Default.args = {}
