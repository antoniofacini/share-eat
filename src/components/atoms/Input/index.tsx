import { FieldValues, UseFormRegister } from 'react-hook-form'

interface IInput {
  currency?: string
  error: boolean
  errorMessage: string | undefined
  fieldName: string
  label: string
  placeholder: string
  prefix?: boolean
  tip?: string
  type?: string
  text?: boolean
  register?: UseFormRegister<FieldValues> | any
  dataTestId?: string
  width?: string
}

const Input = ({
  placeholder = 'Descrição',
  prefix = false,
  currency = 'R$',
  type = 'text',
  fieldName = 'field',
  label = 'Descrição',
  error = false,
  errorMessage = 'Verifique as informações inseridas',
  width = 'full',
  text = false,
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
    <div className="relative">
      {prefix && (
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <p className="font-sans">{currency}</p>
        </div>
      )}
      {text ? (
        <textarea
          id={fieldName}
          type={type}
          placeholder={placeholder}
          className="w-full h-36 rounded p-3"
          data-test-id={dataTestId}
          {...register}
        />
      ) : (
        <input
          id={fieldName}
          type={type}
          placeholder={placeholder}
          className={`w-${width} rounded p-3 ${prefix && 'pl-10'}`}
          data-test-id={dataTestId}
          {...register}
        />
      )}
    </div>
    {tip && !error && <p className="text-white-blur font-light text-sm tracking-tighter">{tip}</p>}
    {error && <p className="w-full text-start text-sm text-white p-1">{errorMessage}</p>}
  </div>
)

export default Input
