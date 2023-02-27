import { ArrowBack, Logo } from '../../components/atoms'

interface IHeader {
  path?: string
  returnFunction: () => void
}

const Header = ({ path, returnFunction }: IHeader) => (
  <header className="py-4 inline-grid grid-cols-3 items-center w-10/12">
    {path !== '/' && <ArrowBack handler={() => returnFunction()} />}
    <Logo />
  </header>
)

export default Header
