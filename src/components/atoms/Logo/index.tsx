import Image from 'next/image'

interface ILogo {}

const Logo = () => <Image alt="logo share ead" src="/logo.png" width={96} height={18} className="h-fit col-start-2" />

export default Logo
