import { theme } from '@/config/theme'
import { Typography } from '@mui/material'
import { FC } from 'react'

type Props = {}

export const RecruitmentPageHeading: FC<Props> = () => {
  return (
    <>
      <Typography variant="h1" fontWeight="bold" color={theme.palette.primary.main} textAlign="center">
        Innovative Career Opportunities - Your Gateway to Success
      </Typography>
      <Typography variant="h4" color={theme.palette.primary.main} paddingTop="24px" textAlign="center">
        Explore a wide array of exciting career opportunities with us. Submit your CV today and take your first step
        towards a successful future. We are committed to fostering a diverse, inclusive work environment where your
        skills and talent can flourish. Apply now to find the job that perfectly matches your aspirations!
      </Typography>
    </>
  )
}
