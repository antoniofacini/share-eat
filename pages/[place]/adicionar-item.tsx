import type { GetServerSideProps, GetServerSidePropsContext } from 'next'
import PublicLayout from '../../src/layouts/PublicLayout'
import AddItem from '../../src/components/templates/AddItem'
import { Places } from '../../types/apiTypes'

const AddItems = ({ data }: Places) => {
  const { name } = data[0]

  return (
    <PublicLayout
      description={`Share Eat- adicionar novo item ao estabelecimento ${name}`}
      title={`Share Eat - ${name}`}
    >
      <AddItem place={data} />
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
