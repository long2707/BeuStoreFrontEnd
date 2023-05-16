import Head from 'next/head'
import React from 'react'

interface IMeta {
  title: string
  description: string
  image?: string
}

const Meta = (props: IMeta) => {
  return (
    <Head>
      <title>{props.title}</title>
      <meta name="description" content={props.description} key="desc" />
      <meta property="og:title" content={props.title} />
      <meta property="og:description" content={props.description} />
      <meta
        property="og:image"
        content={props.image ?? 'https://example.com/images/cool-page.jpg'}
      />
    </Head>
  )
}

export default Meta
