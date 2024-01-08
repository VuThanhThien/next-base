import PreviewImage from '@/assets/images/8seneca-preview.png'
import { theme } from '@/config/theme'
import { RelatedPosts } from '@/features/blog/components/RelatedPosts'
import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

type Props = {}

export const SideSection: FC<Props> = () => {
  return (
    <>
      <Box component="div" textAlign="left" width="100%">
        <Link
          href={{ pathname: `/blog/[slug]`, query: { slug: 'Introduction-to-8Seneca' } }}
          onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
          }}>
          <Typography
            variant="h3"
            fontWeight={theme.typography.fontWeightMedium}
            marginBottom="16px"
            color={theme.palette.primary.main}>
            About 8Seneca
          </Typography>
          <Image width={0} height={0} alt="" src={PreviewImage} />
          <Typography variant="h4" color="#797979" marginTop="8px">
            8Seneca is a Pure Play IT team extensions provider. Experience a seamless extension of your in-house team
            with our tailored IT solutions.
          </Typography>
        </Link>
        <RelatedPosts />
      </Box>
    </>
  )
}
