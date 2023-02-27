import { render } from '@testing-library/react'
import Button from '..'

describe('<Button />', () => {
  it('should render Button component', () => {
    const wrapper = render(<Button text="Salvar" />)
    expect(wrapper).toMatchSnapshot()
  })
})
