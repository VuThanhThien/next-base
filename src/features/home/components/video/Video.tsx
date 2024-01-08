import { useIsMobile } from '@/hooks/useIsMobile'
import { Box, styled } from '@mui/material'
import { FC, useEffect, useRef } from 'react'

const Wrapper = styled(Box)(({ theme }) => ({
  paddingInline: '10%',
  marginBottom: '10%',
  [theme.breakpoints.up('sm')]: {
    paddingInline: '20%',
  },
}))

const StyledVideo = styled('video')({
  width: '100%',
  borderRadius: '30px',
})
type Props = {}

export const Video: FC<Props> = () => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const isMobile = useIsMobile()

  useEffect(() => {
    const videoElement = videoRef.current

    const handleIntersection: IntersectionObserverCallback = entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !isMobile) {
          videoElement?.play()
        } else {
          videoElement?.pause()
        }
      })
    }

    const options: IntersectionObserverInit = {
      threshold: 0.5,
    }

    const observer = new IntersectionObserver(handleIntersection, options)

    if (videoElement) {
      observer.observe(videoElement)
    }

    return () => {
      if (videoElement) {
        observer.unobserve(videoElement)
      }
    }
  }, [])

  return (
    <Wrapper>
      <StyledVideo ref={videoRef} controls muted poster="/images/VideoThumb.png">
        <source src={require('@/assets/video/8senecaVideo.mp4')} type="video/mp4" />
      </StyledVideo>
    </Wrapper>
  )
}
