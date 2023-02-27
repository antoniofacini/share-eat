import { render } from '@testing-library/react'
import ItemDescription from '..'

describe('<ItemDescription />', () => {
  it('should render ItemDescription component', () => {
    const wrapper = render(<ItemDescription />)
    expect(wrapper).toMatchSnapshot()
  })
})
