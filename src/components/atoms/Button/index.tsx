import { ButtonHTMLAttributes } from 'react'

interface IButton {
  text: string
  type: 'button' | 'submit' | 'reset' | undefined
  onClick?: () => void
}

const Button = ({ text, type = 'button', onClick }: IButton) => (
  <button className="w-full bg-yellow rounded p-2 font-bold" type={type}>
    {text}
  </button>
)

export default Button
