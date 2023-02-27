import type { GetServerSideProps, GetServerSidePropsContext, NextPage } from 'next'
import PublicLayout from '../../src/layouts/PublicLayout'
import AddItem from '../../src/components/templates/AddItem'

const AddItems: NextPage = ({ data }: any) => {
  const { name } = data[0]

  return (
    <PublicLayout
      description={`Share Eat- adicionar novo item ao estabelecimento ${name}`}
      title={`Share Eat - ${name}`}
    >
      <div className="flex flex-col items-center justify-center">
        <AddItem place={data} />
      </div>
    </PublicLayout>
  )
}

export default AddItems

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const { host } = context.req.headers
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
