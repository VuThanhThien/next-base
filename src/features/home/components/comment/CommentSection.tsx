import { SectionWrapper } from '@/components/SectionWrapper'
import { theme } from '@/config/theme'
import { CommentList } from '@/features/home/components/comment/CommentList'
import { Typography } from '@mui/material'
import { FC } from 'react'

type Props = {}

export const CommentSection: FC<Props> = () => {
  return (
    <SectionWrapper>
      <Typography
        variant="h2"
        fontWeight={theme.typography.fontWeightRegular}
        textAlign="left"
        color={theme.palette.primary.main}>
        What do the media say <span style={{ fontWeight: theme.typography.fontWeightBold }}>About Us?</span>
      </Typography>
      <CommentList />
    </SectionWrapper>
  )
}
