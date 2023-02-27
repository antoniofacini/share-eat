import { Story, Meta } from '@storybook/react/types-6-0'
import ArrowBack from '.'

export default {
  title: 'Atoms/ArrowBack',
  component: ArrowBack,
} as Meta

export const Default: Story = (args) => (
  <ArrowBack {...args} handler={() => console.log('handle')} />
)
