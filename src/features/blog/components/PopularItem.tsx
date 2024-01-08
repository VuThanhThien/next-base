import { BlogItemType } from '@/features/blog/api/useBlogList'
import { Box, Grid, Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import styled from 'styled-components'

type Props = {
  data?: BlogItemType[]
}

const StyledTypography = styled(Typography)({
  display: '-webkit-box',
  overflow: 'hidden',
  WebkitLineClamp: 2,
  WebkitBoxOrient: 'vertical',
})

export const PopularItem: FC<Props> = ({ data }) => {
  if (!data) {
    return null
  }

  return (
    <>
      {data.map(item => (
        <Link
          key={item.title}
          style={{ display: 'flex', marginBottom: '40px' }}
          href={{ pathname: `/blog/[slug]`, query: { slug: item.slug } }}
          onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
          }}>
          <Grid container spacing={['24px']} key={item.id}>
            <Grid item xs={5}>
              <Image src={item.img} style={{ borderRadius: 10 }} width={500} height={500} alt="blog_image" />
            </Grid>
            <Grid item xs={7}>
              <Box component="div" className="text-left">
                <StyledTypography variant="h3" fontWeight="bold">
                  {item.title}
                </StyledTypography>
                <StyledTypography variant="body1" marginTop="2%">
                  {item.content}
                </StyledTypography>
                <Box display="flex" marginTop="2%">
                  <Typography variant="body1" fontSize="14px">
                    {item.date}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Link>
      ))}
    </>
  )
}
