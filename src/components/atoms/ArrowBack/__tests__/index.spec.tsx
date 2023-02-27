import { render } from '@testing-library/react'
import ArrowBack from '..'

describe('<ArrowBack />', () => {
  it('should render ArrowBack component', () => {
    const wrapper = render(<ArrowBack handler={() => console.log('handle')} />)
    expect(wrapper).toMatchSnapshot()
  })
})
