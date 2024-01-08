import { SectionWrapper } from '@/components/SectionWrapper'
import { AboutUsFirstItem } from '@/features/home/components/about-us/AboutUsFirstItem'
import { AboutUsSecondItem } from '@/features/home/components/about-us/AboutUsSecondItem'
import { useIsMobile } from '@/hooks/useIsMobile'
import { Box, styled } from '@mui/material'
import { FC } from 'react'

export const ContentItem = styled(Box)(props => ({
  width: '90px',
  height: '90px',
  background: 'linear-gradient(113deg, #181E54 -12.48%, #EB1933 85.1%)',
  borderRadius: '24px',
  display: 'flex',
  justifyContent: 'center',
  textAlign: 'center',
  marginTop: '20px',
  marginBottom: '20px',

  [props.theme.breakpoints.up('sm')]: {
    marginTop: '30px',
    marginBottom: '30px',
  },
}))

type Props = {}

export const AboutUsSection: FC<Props> = () => {
  const isMobile = useIsMobile()
  return (
    <SectionWrapper customStyle={{ marginTop: isMobile ? '48px' : '-5%' }}>
      <AboutUsFirstItem />
      <AboutUsSecondItem />
    </SectionWrapper>
  )
}
