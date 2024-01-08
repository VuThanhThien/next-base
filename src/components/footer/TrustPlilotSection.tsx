import TrustPilot from '@/assets/images/Trustpilot.svg'
import TrustpilotLogo from '@/assets/images/TrustpilotLogo.svg'
import { Typography, styled } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

const Wrapper = styled(Link)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '5px',
})

type Props = {}

export const TrustPilotSection: FC<Props> = () => {
  return (
    <Wrapper href={'https://www.trustpilot.com/review/8seneca.com'} target="_blank">
      <Typography fontWeight={500} color="#FFF" fontSize="18px">
        Excellent
      </Typography>
      <Image src={TrustPilot} width={0} height={0} alt="" />
      <Image src={TrustpilotLogo} width={0} height={0} alt="" />
    </Wrapper>
  )
}
