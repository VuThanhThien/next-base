import { PageWrapper } from '@/components/PageWrapper'
import { ScheduleForm } from '@/features/contact-us/components/ScheduleForm'
import { Box, Typography } from '@mui/material'
import { FC } from 'react'

type Props = {}

export const ContactUsSection: FC<Props> = () => {
  return (
    <PageWrapper>
      <Typography variant="h1" fontSize="30px" textAlign="center">
        Let’s connect
      </Typography>
      <Typography variant="subtitle1" marginTop="16px" textAlign="center">
        Ready to accelerate your IT projects with superior talent and tailored solutions? Connect with us today.
      </Typography>
      <Box marginY="-5%">
        <ScheduleForm />
      </Box>
    </PageWrapper>
  )
}
