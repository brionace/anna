import Head from 'next/head'

type Head = {
  title?: string
  description?: string
}

export default function Hat({title, description}: Head) {
  const newTitle = title ? title + ' | ' : ''
    return (
        <Head>
        <title>{`${newTitle}Anna Paton Studios`}</title>
        {description && <meta name="description" content={description} />}
        <link rel="icon" href="/favicon.ico" />
      </Head>
    )
}