import { render } from '@testing-library/react'
import PlaceCard from '..'

describe('<PlaceCard />', () => {
  it('should render PlaceCard component', () => {
    const wrapper = render(
      <PlaceCard handleList={() => console.log('list')} handleAdd={() => console.log('add')} />
    )
    expect(wrapper).toMatchSnapshot()
  })
})
