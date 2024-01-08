import SuccessContactIcon from '@/assets/images/SuccessContactIcon.png'
import TimeIcon from '@/assets/images/TimeIcon.png'
import UserSuccessIcon from '@/assets/images/UserSuccesIcon.png'
import { theme } from '@/config/theme'
import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import { FC } from 'react'
import styled from 'styled-components'

type Props = {
  open: boolean
  describedDay: string
  describedDate: string
  describedTime: string
  describedTimeEnd: string
  name?: string
}

const TimeCard = styled('div')({
  height: '96px',
  display: 'flex',
  background: '#FFFFFF',
  borderRadius: '8px',
  marginLeft: 'auto',
  marginRight: 'auto',
  alignItems: 'center',
  justifyContent: 'flex-start',
})

const SuccessItemCard = styled('div')({
  height: '60px',
  display: 'flex',
  background: '#FFFFFF',
  borderRadius: '8px',
  marginLeft: 'auto',
  marginRight: 'auto',
  alignItems: 'center',
  justifyContent: 'flex-start',
})

const Wrapper = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  justifySelf: 'center',
  paddingTop: '10%',
})
export const Success: FC<Props> = ({ open, describedDate, describedDay, describedTime, describedTimeEnd, name }) => {
  if (open) {
    return (
      <Wrapper>
        <Typography
          variant="h2"
          fontWeight={theme.typography.fontWeightBold}
          style={{ textAlign: 'center' }}
          color={theme.palette.info.main}>
          Successful Appointment
        </Typography>
        <Typography
          variant="body2"
          fontWeight={theme.typography.fontWeightRegular}
          style={{ color: theme.palette.info.main, paddingTop: '16px', textAlign: 'center', paddingBottom: '32px' }}>
          We will send an invitation to your email
        </Typography>
        <Box paddingBottom="30px">
          <TimeCard>
            <Box paddingLeft="24px">
              <Image src={TimeIcon} style={{ height: 22, width: 22, marginRight: 20 }} alt="success" />
            </Box>
            <Typography variant="body1" fontWeight={theme.typography.fontWeightRegular}>
              {describedDay}, {describedDate}, {describedTime} - {describedTimeEnd}
            </Typography>
          </TimeCard>
        </Box>
        <Box paddingBottom="30px">
          <SuccessItemCard>
            <Box paddingLeft="24px">
              <Image src={UserSuccessIcon} style={{ height: 22, width: 22 }} alt="success" />
            </Box>
            <Typography variant="body1" fontWeight={theme.typography.fontWeightRegular} paddingLeft="20px">
              {name}
            </Typography>
          </SuccessItemCard>
        </Box>
        <Box paddingBottom="30px">
          <SuccessItemCard>
            <Box paddingLeft="24px">
              <Image src={SuccessContactIcon} style={{ height: 22, width: 22 }} alt="success" />
            </Box>
            <Typography variant="body1" fontWeight={theme.typography.fontWeightRegular} paddingLeft="20px">
              Google Meet
            </Typography>
          </SuccessItemCard>
        </Box>
      </Wrapper>
    )
  } else {
    return <></>
  }
}
