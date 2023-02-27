import { useRouter } from 'next/router'
import { ReactNode } from 'react'
import Head from './Head'
import Header from './Header'

interface IPublicLayout {
  canonicalUrl: string
  children: ReactNode | JSX.Element | JSX.Element[]
  description: string
  indexable: boolean
  title: string
}

const PublicLayout = ({ children, title, description, indexable, canonicalUrl }: IPublicLayout) => {
  const { back, pathname } = useRouter()

  return (
    <div className="flex bg-black-background min-h-screen min-w-screen flex-col items-center">
      <Head canonicalUrl={canonicalUrl} description={description} indexable={indexable} title={title} />
      <Header path={pathname} returnFunction={back} />
      <main className="w-10/12">{children}</main>
    </div>
  )
}

export default PublicLayout
