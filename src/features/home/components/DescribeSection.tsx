import HeroSectionItem from '@/assets/images/HeroSectionItem.png'
import HeroAnimation from '@/assets/lottie/hero.json'
import LogoAnimation from '@/assets/lottie/logo.json'
import { SectionWrapper } from '@/components/SectionWrapper'
import { linearGradientColor, mainRed, theme } from '@/config/theme'
import { CalendarPopUp } from '@/features/contact-us/components/CalendarPopUp'
import { useIsMobile } from '@/hooks/useIsMobile'
import { Box, Grid, Typography } from '@mui/material'
import { motion } from 'framer-motion'
import Lottie from 'lottie-react'
import Image from 'next/image'
import { FC, useEffect, useRef, useState } from 'react'
import { Fade, Zoom } from 'react-awesome-reveal'

import styled from 'styled-components'

type Props = {}

const StyledTypo = styled(Typography)({
  width: '100%',
  color: '#181E54',
  textAlign: 'left',
})
export const DescribeSection: FC<Props> = () => {
  const isMobile = useIsMobile()
  const [isOpeningContactUs, setIsOpeningContactUs] = useState(false)
  const [isShowingLogo, setIsShowingLogo] = useState(true)

  const [isHiding, setIsHiding] = useState(false)

  const logoRef = useRef<any>()
  useEffect(() => {
    setTimeout(() => setIsHiding(true), 1500)
    setTimeout(() => setIsShowingLogo(false), logoRef.current?.getDuration() * 1000)
  }, [logoRef.current])

  return (
    <SectionWrapper>
      <Grid container columnSpacing="40px">
        <Grid item xs={12} sm={7} alignItems="center" display={'flex'}>
          <Box component="div" display="flex" flexDirection="column">
            <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
              <Fade duration={2000}>
                <StyledTypo
                  variant="h1"
                  fontWeight={theme.typography.fontWeightBold}
                  color={theme.palette.primary.main}>
                  Empowering Businesses Through IT Outsourcing and Team{' '}
                  <span style={{ color: mainRed, display: 'block' }}>
                    Extensions
                    <Image src={HeroSectionItem} style={{ width: isMobile ? '30%' : '20%' }} alt="hero" />
                  </span>
                </StyledTypo>
              </Fade>
            </div>
            <Zoom duration={2500}>
              <StyledTypo
                marginTop="6%"
                variant="h3"
                fontWeight={theme.typography.fontWeightRegular}
                color={theme.palette.primary.main}>
                Experience a seamless extension of your in-house team with our tailored IT solutions. Discover the
                difference of true collaboration and elevate your business to new heights with 8Seneca
              </StyledTypo>
            </Zoom>
            <Box component="div" display="flex" justifyContent="left" width="100%">
              <Zoom duration={2500}>
                <motion.button
                  whileHover={{
                    scale: 1.1,
                  }}
                  style={{
                    borderRadius: '8px',
                    minWidth: '164px',
                    height: '40px',
                    background: linearGradientColor,
                    marginTop: '24px',
                  }}
                  onClick={() => setIsOpeningContactUs(true)}>
                  <Typography color={theme.palette.info.main} className="font-normal text-base">
                    GET IN TOUCH
                  </Typography>
                </motion.button>
              </Zoom>
              <CalendarPopUp open={isOpeningContactUs} onClose={() => setIsOpeningContactUs(!isOpeningContactUs)} />
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={5}>
          {isShowingLogo ? (
            <Lottie
              className={isHiding ? 'fadeOut' : ''}
              lottieRef={logoRef}
              animationData={LogoAnimation}
              onComplete={() => setIsShowingLogo(false)}
            />
          ) : (
            <Zoom duration={2000}>
              <Lottie animationData={HeroAnimation} loop={true} />
            </Zoom>
          )}
        </Grid>
      </Grid>
    </SectionWrapper>
  )
}
