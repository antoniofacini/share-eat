interface IInput {
  error: boolean
  errorMessage: string
  fieldName: string
  label: string
  placeholder: string
  prefix?: string
  tip?: string
  type?: string
  register: any
}

const Input = ({
  placeholder = 'Descrição',
  prefix = '',
  type = 'text',
  fieldName = 'field',
  label = 'Descrição',
  error = false,
  errorMessage = 'Verifique as informações inseridas',
  tip = '',
  register,
}: IInput) => {
  return (
    <>
      <label htmlFor={fieldName} className="w-full text-start text-md font-sans text-white-blur p-1">
        {label}
      </label>
      <input id={fieldName} type={type} placeholder={placeholder} className="w-full rounded p-3" {...register} />
      {tip && <p className="text-white-blur">{tip}</p>}
      {error && <p className="w-full text-start text-sm text-white p-1">{errorMessage}</p>}
    </>
  )
}

export default Input
