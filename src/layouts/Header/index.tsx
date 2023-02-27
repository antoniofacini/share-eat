import { ArrowBack, Logo } from '../../components/atoms'

interface IHeader {
  path?: string
  returnFunction: () => void
}

const Header = ({ path, returnFunction }: IHeader) => (
  <header className="py-4 inline-grid grid-cols-3  w-10/12 md:grid-cols-12">
    {path !== '/' && <ArrowBack handler={() => returnFunction()} />}
    <div className="h-8 col-start-2 grid place-content-center">
      <Logo />
    </div>
  </header>
)

export default Header
