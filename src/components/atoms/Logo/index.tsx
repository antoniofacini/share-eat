import Image from 'next/image'
import useWindowSize from '../../../hooks/useWindowSize'

const Logo = () => {
  const { width } = useWindowSize()
  return (
    <Image
      alt="logo share eat"
      src={width < 768 ? '/logo.png' : '/logo-big.png'}
      width={96}
      height={18}
    />
  )
}

export default Logo
