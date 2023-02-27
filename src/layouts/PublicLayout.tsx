import { useRouter } from 'next/router'
import { ReactNode } from 'react'
import Head from './Head'
import Header from './Header'

interface IPublicLayout {
  canonicalUrl?: string
  children: ReactNode | JSX.Element | JSX.Element[]
  description: string
  indexable?: boolean
  title: string
}

const PublicLayout = ({
  children,
  title,
  description,
  indexable = false,
  canonicalUrl,
}: IPublicLayout) => {
  const { back, pathname } = useRouter()

  return (
    <div className="flex bg-black-background min-h-screen min-w-screen flex-col items-center">
      <Head
        canonicalUrl={canonicalUrl}
        description={description}
        indexable={indexable}
        title={`${title || 'Share Eat'}`}
      />
      <Header path={pathname} returnFunction={back} />
      <main className="w-10/12  md:shadow-2xl md:p-6 md:rounded-lg md:m-auto md:w-6/12 lg:w-4/12 md:bg-gray">
        {children}
      </main>
    </div>
  )
}

export default PublicLayout
