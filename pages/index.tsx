import type { NextPage } from 'next'
import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import PublicLayout from '../src/layouts/PublicLayout'
import ShowPlaces from '../src/components/templates/ShowPlaces'

const Home: NextPage = ({ data }: any) => {
  return (
    <PublicLayout canonicalUrl="/" description={'Home'} indexable title="Home">
      <ShowPlaces places={data} />
    </PublicLayout>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
  const host = context.req.headers.host

  const requestUrl = (): string => {
    if (process.env.NODE_ENV === 'development') {
      return `http://${host}/api/data`
    }
    return `https://${host}/api/data`
  }

  const res = await fetch(requestUrl())
  const data = await res.json()

  return { props: { ...data } }
}
