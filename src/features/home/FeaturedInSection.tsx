import featureIn1 from '@/assets/images/featureIn1.png'
import featureIn2 from '@/assets/images/featureIn2.png'
import featureIn3 from '@/assets/images/featureIn3.png'
import featureIn4 from '@/assets/images/featureIn4.png'
import featureIn5 from '@/assets/images/featureIn5.png'
import { FancyCarousel } from '@/components/FancyCarousel'
import { Box } from '@mui/material'
import { FC } from 'react'

type Props = {}

export const FeaturedInSection: FC<Props> = () => {
  const images = [featureIn1, featureIn2, featureIn3, featureIn4, featureIn5]

  return (
    <Box display="flex" alignItems="center" justifyContent="center" marginTop={12} marginBottom={-12}>
      <div className="carousel">
        <FancyCarousel
          images={images}
          carouselRadius={128}
          peripheralImageRadius={32}
          centralImageRadius={64}
          focusElementStyling={{ border: '2px solid #b63d5b' }}
          autoRotateTime={3}
          borderWidth={4}
          borderHexColor={'b63d5b'}
        />
      </div>
    </Box>
  )
}
