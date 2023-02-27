import type { GetServerSideProps, GetServerSidePropsContext } from 'next'
import PublicLayout from '../src/layouts/PublicLayout'
import ShowPlaces from '../src/components/templates/ShowPlaces'
import { Places } from '../types/apiTypes'

const Home = ({ data }: Places) => (
  <PublicLayout canonicalUrl="/" description="Share Eat" indexable title="Share Eat">
    <ShowPlaces places={data} />
  </PublicLayout>
)

export default Home

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const { host } = context.req.headers

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
