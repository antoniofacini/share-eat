import { render } from '@testing-library/react'
import Input from '..'

describe('<Input />', () => {
  it('should render Input component', () => {
    const wrapper = render(
      <Input
        error
        errorMessage="Mensagem de erro"
        fieldName="Nome"
        label="Nome do prato"
        placeholder="Prato"
      />
    )
    expect(wrapper).toMatchSnapshot()
  })
})
