import { Story, Meta } from '@storybook/react/types-6-0'
import Input from '.'

export default {
  title: 'Atoms/Input',
  component: Input,
} as Meta

export const Default: Story = (args) => (
  <Input
    error
    errorMessage={'Mensagem de erro'}
    fieldName="Nome"
    label="Nome do prato"
    placeholder="Prato"
    register={() => console.log('handle')}
  />
)
