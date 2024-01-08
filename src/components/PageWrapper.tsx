import { useIsMobile } from '@/hooks/useIsMobile'
import Head from 'next/head'
import { FC } from 'react'

type MetatagType = {
  title?: string
  image?: string
  description?: string
  publishedDate?: string
}

type Props = {
  children: any
  customStyle?: any
  title?: any
  metaTags?: MetatagType
}

export const PageWrapper: FC<Props> = ({ children, customStyle, title, metaTags }) => {
  const isMobile = useIsMobile()
  return (
    <>
      <Head>
        <meta
          property="og:title"
          content={metaTags?.title ? metaTags.title : '8seneca: Pure Play IT Team Extension Company in Singapore'}
        />
        <meta
          property="og:image"
          content={metaTags?.image ? metaTags.image : 'https://8seneca.com/images/preview.png'}
        />
        <meta property="og:description" content={metaTags?.description ? metaTags.description : ''} />
        <meta property="og:site_name" content="8seneca" />
        <meta name="twitter:card" content="summary_large_image" />
        {metaTags?.publishedDate && (
          <>
            <meta name="twitter:label1" content="Published Date" />
            <meta name="twitter:data1" content={metaTags.publishedDate} />
          </>
        )}

        <title>{title ? title : '8Seneca: Pure Play IT Team Extension Company in Singapore'}</title>
        <link href="/dist/output.css" rel="stylesheet"></link>
        <link rel="icon" type="image/ico" href="/images/favicon.ico" />
      </Head>
      <div style={{ paddingTop: isMobile ? '20%' : '8%', ...customStyle }}>{children}</div>
    </>
  )
}
