import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { string, object } from 'yup'
import { Button, Input } from '../../atoms'

interface IAddItem {
  place: any
}

interface INewItem {
  name: string
  description: string
  price: number
}

const schema = object({
  name: string().required('*Campo Obrigatório'),
  description: string().required('*Campo Obrigatório'),
  price: string().required('*Campo Obrigatório'),
}).required()

const AddItem = ({ place }: IAddItem) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<INewItem>({ resolver: yupResolver(schema) })
  const onSubmit = (NewItem: INewItem) => console.log(NewItem)

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
      <p className="font-bold text-yellow text-4xl">{place[0].name}</p>
      <Input
        error={!!errors.name}
        errorMessage={errors.name?.message}
        fieldName="Nome"
        label="Nome do prato"
        placeholder="Prato"
        register={register('name')}
      />
      <Input
        error={!!errors.description}
        errorMessage={errors.description?.message}
        fieldName="Nome"
        label="Valor"
        placeholder="0,00"
        register={register('description')}
      />
      <Input
        error={!!errors.price}
        errorMessage={errors.price?.message}
        fieldName="Nome"
        label="Descrição do prato"
        placeholder="Insira uma descrição"
        tip="*A descrição deve conter até 200 caracteres."
        register={register('price')}
      />
      <Button text="Salvar" type="submit" />
    </form>
  )
}

export default AddItem
