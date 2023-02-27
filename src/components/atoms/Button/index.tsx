/* eslint-disable react/button-has-type */
interface IButton {
  text: string
  type?: 'button' | 'submit' | 'reset'
  onClick?: () => void
}

const Button = ({ text, type = 'button', onClick }: IButton) => (
  <button className="w-full bg-yellow rounded p-2 font-bold" type={type} onClick={onClick}>
    {text}
  </button>
)

export default Button
