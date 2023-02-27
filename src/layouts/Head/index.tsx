import NextHead from 'next/head'

interface IHead {
  canonicalUrl: string
  description: string
  indexable: boolean
  title: string
}

const Head = ({ canonicalUrl, description, indexable, title }: IHead) => (
  <NextHead>
    {title && <title>{title}</title>}
    <meta charSet="utf-8" />
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <meta name="keywords" content="alimentação, restaurantes, bebidas, bares, comida" />
    {description && (
      <>
        <meta name="description" content={description} />
        <meta property="og:description" content={description} />
        <meta name="twitter:description" content={description} data-react-helmet="true" />
      </>
    )}
    {indexable && <link rel="canonical" href={canonicalUrl} />}
  </NextHead>
)

export default Head
