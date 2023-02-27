import { FieldValues, UseFormRegister } from 'react-hook-form'

interface IInput {
  error: boolean
  errorMessage: string | undefined
  fieldName: string
  label: string
  placeholder: string
  // prefix?: string
  tip?: string
  type?: string
  register?: UseFormRegister<FieldValues> | any
  dataTestId?: string
}

const Input = ({
  placeholder = 'Descrição',
  // prefix = '',
  type = 'text',
  fieldName = 'field',
  label = 'Descrição',
  error = false,
  errorMessage = 'Verifique as informações inseridas',
  tip = '',
  register,
  dataTestId,
}: IInput) => (
  <div className="grid gap-1">
    <label
      htmlFor={fieldName}
      className="w-full text-start text-sm font-bold font-sans text-white-blur p-1"
    >
      {label}
    </label>
    <input
      id={fieldName}
      type={type}
      placeholder={placeholder}
      className="w-full rounded p-3"
      data-test-id={dataTestId}
      {...register}
    />
    {tip && !error && <p className="text-white-blur font-light text-sm tracking-tighter">{tip}</p>}
    {error && <p className="w-full text-start text-sm text-white p-1">{errorMessage}</p>}
  </div>
)

export default Input
