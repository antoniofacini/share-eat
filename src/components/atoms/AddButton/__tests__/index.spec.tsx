import { render } from '@testing-library/react'
import AddButton from '..'

describe('<AddButton />', () => {
  it('should render AddButton component', () => {
    const wrapper = render(<AddButton handler={() => console.log('handle')} />)
    expect(wrapper).toMatchSnapshot()
  })
})
