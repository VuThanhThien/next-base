import Logo from '@/assets/images/FooterLogo.png'
import { ContactUsSection } from '@/components/footer/ContactUsSection'
import { SubscribeUsSection } from '@/components/footer/SubscribeUsSection'
import { TrustPilotSection } from '@/components/footer/TrustPlilotSection'
import { linearGradientColor } from '@/config/theme'
import Image from 'next/image'

import { styled } from '@mui/material'
import { FC } from 'react'

type Props = {}

const Wrapper = styled('div')({
  background: linearGradientColor,
  borderRadius: '12px',
})

const ItemWrapper = styled('div')({
  paddingBlock: '10%',
  paddingInline: '8%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
})

export const FooterInfoSection: FC<Props> = () => {
  return (
    <Wrapper>
      <ItemWrapper>
        <Image src={Logo} alt="logo" style={{ width: '70%' }} />
        <TrustPilotSection />
        <SubscribeUsSection />
        <ContactUsSection />
      </ItemWrapper>
    </Wrapper>
  )
}
