import { Story, Meta } from '@storybook/react/types-6-0'
import Typography from '.'

export default {
  title: 'Atoms/Typography',
  component: Typography,
} as Meta

export const Default: Story = (args) => <Typography {...args} />
Default.args = {}
