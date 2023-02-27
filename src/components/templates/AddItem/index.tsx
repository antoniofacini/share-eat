import { useForm } from 'react-hook-form'
import { Button, Input } from '../../atoms'

interface INewItem {
  name: string
  description: string
  price: number
}

const AddItem = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<INewItem>()
  const onSubmit = (NewItem: INewItem) => console.log(NewItem)
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <p>Nome do Restaurante</p>
      <Input
        error={!!errors.name}
        errorMessage="Erro"
        fieldName="Nome"
        label="Nome do prato"
        placeholder="Prato"
        register={register('name')}
      />
      <Input
        error={!!errors.description}
        errorMessage="Erro"
        fieldName="Nome"
        label="Nome do prato"
        placeholder="Prato"
        register={register('description')}
      />
      <Input
        error={!!errors.price}
        errorMessage="Erro"
        fieldName="Nome"
        label="Nome do prato"
        placeholder="Prato"
        register={register('price')}
      />
      <Button text="Salvar" type="submit" />
    </form>
  )
}

export default AddItem
