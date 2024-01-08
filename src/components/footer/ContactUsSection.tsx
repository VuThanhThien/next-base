import { theme } from '@/config/theme'
import { Box, Typography, styled } from '@mui/material'
import { FC } from 'react'

type Props = {}

const DescriptionTypo = styled(Typography)({
  color: theme.palette.info.main,
  fontSize: '16px',
  fontWeight: 500,
})

export const ContactUsSection: FC<Props> = () => {
  return (
    <Box width="100%" textAlign="left" marginTop="32px">
      <Typography variant="h1" fontSize="24px" color={theme.palette.info.main}>
        CONTACT US
      </Typography>
      <Box marginTop="24px">
        <DescriptionTypo>info@8seneca.com</DescriptionTypo>
        <DescriptionTypo>+84 86 2981699</DescriptionTypo>
        <DescriptionTypo>Vietnam</DescriptionTypo>
      </Box>
    </Box>
  )
}
