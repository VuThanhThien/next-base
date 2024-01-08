import { SectionWrapper } from '@/components/SectionWrapper'
import { theme } from '@/config/theme'
import { ScheduleForm } from '@/features/contact-us/components/ScheduleForm'
import { Box, Typography } from '@mui/material'
import { FC } from 'react'

type Props = {}

export const ContactUsSection: FC<Props> = () => {
  return (
    <SectionWrapper>
      <Typography
        variant="h2"
        color={theme.palette.primary.main}
        fontWeight={theme.typography.fontWeightBold}
        textAlign="center"
        marginTop={24}>
        Let’s connect
      </Typography>
      <Typography
        variant="h4"
        color={theme.palette.primary.main}
        fontWeight={theme.typography.fontWeightRegular}
        marginTop="16px"
        textAlign="center">
        Ready to accelerate your IT projects with superior talent and tailored solutions? Connect with us today.
      </Typography>
      <Box marginY="-5%">
        <ScheduleForm />
      </Box>
    </SectionWrapper>
  )
}
