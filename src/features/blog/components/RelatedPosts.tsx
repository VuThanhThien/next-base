import { theme } from '@/config/theme'
import { AMOUNT_QUERY_POSTS } from '@/constants/blog'
import { useBlogList } from '@/features/blog/api/useBlogList'
import { Box, Typography } from '@mui/material'
import Link from 'next/link'
import styled from 'styled-components'

const StyledTypography = styled(Typography)({
  display: '-webkit-box',
  overflow: 'hidden',
  WebkitLineClamp: 2,
  WebkitBoxOrient: 'vertical',
})

export const RelatedPosts = () => {
  const { data } = useBlogList(AMOUNT_QUERY_POSTS)

  if (!data) {
    return null
  }
  return (
    <Box component="div" textAlign="left" width="100%">
      <Typography
        variant="h3"
        fontWeight={theme.typography.fontWeightMedium}
        color={theme.palette.primary.main}
        marginTop="32px">
        Related Blog Posts
      </Typography>
      {data.slice(0, 3).map((blogRelatedPostItem: any) => (
        <Link
          key={blogRelatedPostItem.slug}
          onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
          }}
          href={{ pathname: `/blog/[slug]`, query: { slug: blogRelatedPostItem.slug } }}
          style={{
            marginTop: '32px',
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            textAlign: 'left',
          }}>
          <Box component="img" src={blogRelatedPostItem.img} borderRadius="10px" />
          <Typography variant="body1" color="#5F6D7E" marginTop="4%">
            {blogRelatedPostItem.date}
          </Typography>
          <StyledTypography variant="h6" marginTop="2%">
            {blogRelatedPostItem.title}
          </StyledTypography>
        </Link>
      ))}
    </Box>
  )
}
