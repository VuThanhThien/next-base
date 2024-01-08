import { theme } from '@/config/theme'
import { Typography } from '@mui/material'

export const ResumeTitle = ({ title }: { title: string }) => {
  return (
    <Typography variant="h5" color={theme.palette.primary.main}>
      {title}
    </Typography>
  )
}
