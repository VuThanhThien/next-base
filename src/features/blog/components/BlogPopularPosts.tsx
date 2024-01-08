import { BlogLoading } from '@/components/loading/BlogLoading'
import { BlogItemType } from '@/features/blog/api/useBlogList'
import { PopularItem } from '@/features/blog/components/PopularItem'
import { Box, Grid, Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import 'react-loading-skeleton/dist/skeleton.css'

type Props = {
  isLoading: boolean
  data?: BlogItemType[]
}

export const BlogPopularPosts: FC<Props> = ({ data, isLoading }) => {
  if (isLoading) {
    return <BlogLoading />
  }

  if (!data) {
    return null
  }

  const [firstItem, ...remainingItems] = data

  return (
    <Box maxWidth="100%">
      <Grid container spacing="64px">
        <Grid item xs={12} sm={12} md={6} lg={6}>
          {firstItem && (
            <Box component="div" display="flex" justifyContent="center" alignItems="center" flexDirection="column">
              <Link href={{ pathname: `/blog/[slug]`, query: { slug: firstItem.slug } }}>
                <Box
                  style={{
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                    borderRadius: '10px',
                    overflow: 'hidden',
                  }}>
                  <Image src={firstItem.img} width={0} height={0} layout="responsive" alt="blog_image" />
                </Box>
                <Box component="div" textAlign="left">
                  <Typography variant="h3" fontWeight="bold" marginTop="1%">
                    {firstItem.title}
                  </Typography>
                  <Typography variant="body1" marginTop="2%">
                    {firstItem.content}
                  </Typography>
                  <Typography variant="body1" fontSize="14px" marginTop="2%">
                    {firstItem.date}
                  </Typography>
                </Box>
              </Link>
            </Box>
          )}
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <PopularItem data={remainingItems} />
        </Grid>
      </Grid>
    </Box>
  )
}
