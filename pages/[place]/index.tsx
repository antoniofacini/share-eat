import type { GetServerSidePropsContext, NextPage } from 'next'
import PublicLayout from '../../src/layouts/PublicLayout'

import ShowItems from '../../src/components/templates/ShowItems'
import { env } from 'process'

const Place: NextPage = ({ data }: any) => {
  return (
    <PublicLayout>
      <p>{data[0].name}</p>
      <p>{data[0].menuItems?.length}</p>
      <ShowItems items={data[0].menuItems} />
    </PublicLayout>
  )
}

export default Place

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
  const host = context.req.headers.host
  const { place } = context.query

  const requestUrl = (): string => {
    if (process.env.NODE_ENV === 'development') {
      return `http://${host}/api/data/${place}`
    }
    return `https://${host}/api/data`
  }

  const res = await fetch(requestUrl())
  const data = await res.json()

  return { props: { ...data } }
}
