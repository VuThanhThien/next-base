import { PageWrapper } from '@/components/PageWrapper'
import { AMOUNT_QUERY_POSTS } from '@/constants/blog'
import { useBlogList } from '@/features/blog/api/useBlogList'
import { BlogLatestPosts } from '@/features/blog/components/BlogLastestPosts'
import { BlogPopularPosts } from '@/features/blog/components/BlogPopularPosts'
import * as _ from 'lodash'
import Head from 'next/head'
import { useMemo } from 'react'

export default function Page() {
  const { data: blogList, isLoading } = useBlogList(AMOUNT_QUERY_POSTS)
  console.log(blogList)

  const latestPosts = useMemo(() => {
    if (!blogList) {
      return []
    }

    return _.orderBy(blogList, ['date'], ['asc']).slice(0, 6)
  }, [blogList])

  console.log(latestPosts)
  return (
    <>
      <Head>
        <meta property="og:title" content="8seneca: Pure Play IT Team Extension Company" />
        <meta property="og:image" content="https://8seneca.com/In-house-IT-Department-Vs-Outsourced-IT-Support.png" />
      </Head>
      <PageWrapper customStyle={{ paddingLeft: '10%', paddingRight: '10%' }}>
        <BlogPopularPosts data={blogList?.slice(0, 4)} isLoading={isLoading} />
        <BlogLatestPosts data={latestPosts} isLoading={isLoading} />
      </PageWrapper>
    </>
  )
}
