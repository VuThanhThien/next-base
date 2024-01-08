import LottieData from '@/assets/lottie/wave-animation.json'
import { Video } from '@/features/home/components/video/Video'
import { Box } from '@mui/material'
import { styled } from '@mui/system'
import Lottie from 'lottie-react'
import { FC } from 'react'
import { Fade } from 'react-awesome-reveal'

const Wrapper = styled(Box)({
  background: 'linear-gradient(180deg, rgba(235, 25, 51, 0.00) 0%, rgba(235, 25, 51, 0.50) 34.67%, #181E54 100%)',
  marginTop: '84px',
  width: '100%',
  height: '100%',
  overflow: 'hidden',
  '& svg': {
    height: '100% !important',
    transform: 'none !important',
  },
})

type Props = {}

export const VideoSection: FC<Props> = () => {
  return (
    <Fade duration={3000}>
      <Wrapper>
        <Video />
        <Lottie animationData={LottieData} loop={true} style={{ width: 'auto' }} />
      </Wrapper>
    </Fade>
  )
}
