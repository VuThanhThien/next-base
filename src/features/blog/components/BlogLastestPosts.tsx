import { mainRed, theme } from '@/config/theme'
import { BlogItemType } from '@/features/blog/api/useBlogList'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { Box, Grid, Typography, styled } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

const LinkStyle = styled(Link)({
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  textAlign: 'left',
})

const StyledTypography = styled(Typography)({
  display: '-webkit-box',
  overflow: 'hidden',
  WebkitLineClamp: 2,
  WebkitBoxOrient: 'vertical',
})

type Props = {
  data: BlogItemType[]
  isLoading: boolean
}

export const BlogLatestPosts: FC<Props> = ({ data, isLoading }) => {
  if (!data) {
    return null
  }

  return (
    <>
      <Typography variant="h2" fontWeight="bold" color={theme.palette.primary.main} textAlign="center" marginTop="24px">
        Latest Blog Posts
      </Typography>
      <Grid container spacing="32px" marginTop="1%">
        {data.map((item: BlogItemType) => (
          <Grid key={item.title} item xs={12} sm={4}>
            <LinkStyle
              href={{ pathname: `/blog/[slug]`, query: { slug: item.slug } }}
              onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
              }}>
              <Image src={item.img} width={500} height={500} style={{ borderRadius: 10 }} alt="blog_image" />
              <Typography variant="body2" color="#5F6D7E" marginTop="16px">
                {item.date}
              </Typography>
              <StyledTypography variant="h3" fontWeight="bold" paddingTop="8px">
                {item.title}
              </StyledTypography>
              <Box component="div" marginTop="16px" display="flex" justifyContent="flex-start">
                <Typography fontWeight="bold" variant="body2" color={mainRed} marginRight="8px">
                  Read More
                </Typography>
                <ArrowForwardIcon sx={{ color: mainRed, fontSize: '20px', marginTop: '1px' }} />
              </Box>
            </LinkStyle>
          </Grid>
        ))}
      </Grid>
    </>
  )
}
