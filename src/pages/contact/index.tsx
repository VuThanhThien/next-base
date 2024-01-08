import { PageWrapper } from '@/components/PageWrapper'
import { theme } from '@/config/theme'
import { ScheduleForm } from '@/features/contact-us/components/ScheduleForm'
import { Box, Typography } from '@mui/material'

export default function Page() {
  return (
    <PageWrapper customStyle={{ textAlign: 'center', paddingInline: '5%' }}>
      <Typography variant="h1" fontWeight="bold" color={theme.palette.primary.main}>
        Contact us
      </Typography>
      <Typography variant="h4" fontWeight={theme.typography.fontWeightRegular} color={theme.palette.primary.main}>
        To facilitate our meeting, kindly provide the table details for input.
      </Typography>
      <Box marginTop="-5%">
        <ScheduleForm />
      </Box>
    </PageWrapper>
  )
}
