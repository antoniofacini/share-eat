import type { GetServerSideProps, GetServerSidePropsContext, NextPage } from 'next'
import { useRouter } from 'next/router'
import PublicLayout from '../../src/layouts/PublicLayout'
import { AddButton } from '../../src/components/atoms'
import ShowItems from '../../src/components/templates/ShowItems'

const Place: NextPage = ({ data }: any) => {
  const { push } = useRouter()
  return (
    <PublicLayout
      description={`Share Eat- lista de items do estabelecimento ${data[0].name}`}
      title={`Share Eat - ${data[0].name}`}
    >
      <div className="grid gap-4">
        <h1 className="font-bold text-yellow text-4xl">{data[0].name}</h1>
        <p className="text-white text-sm font-light">{data[0].menuItems?.length} pratos</p>
        <ShowItems items={data[0].menuItems} />
        <div className="fixed bottom-8 right-8">
          <AddButton isVariant handler={() => push(`/${data[0].id}/adicionar-item`)} />
        </div>
      </div>
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
