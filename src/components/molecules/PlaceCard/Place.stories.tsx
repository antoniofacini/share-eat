import { Story, Meta } from '@storybook/react/types-6-0'
import PlaceCard from '.'

export default {
  title: 'Molecules/PlaceCard',
  component: PlaceCard,
} as Meta

export const Default: Story = (args) => (
  <PlaceCard
    name={'Silva'}
    description={`10 pratos`}
    handleList={() => console.log('go-to-list')}
    handleAdd={() => console.log('go-to-add-item')}
  />
)
