import InnovationAnimation from '@/assets/lottie/InnovationAnimation.json'
import { theme } from '@/config/theme'
import { useIsMobile } from '@/hooks/useIsMobile'
import { Box, Grid, Typography } from '@mui/material'
import Lottie from 'lottie-react'
import { FC } from 'react'

type Props = {}
const textColumn = (
  <Box>
    <Typography variant="h2" color={theme.palette.primary.main} fontWeight={theme.typography.fontWeightBold}>
      Driving Digital Innovation Through Global IT Talent
    </Typography>
    <Box component="div" marginTop="2%" textAlign="left">
      <Typography variant="h4" color={theme.palette.primary.main} fontWeight={theme.typography.fontWeightRegular}>
        At 8Seneca, we specialize in global B2B IT outsourcing, connecting your business with top-tier IT professionals
        from Vietnam. Leveraging our unique Pure Play model, we offer unparalleled flexibility and high expertise to
        startups and enterprises alike.
      </Typography>
    </Box>
  </Box>
)

export const AboutUsFirstItem: FC<Props> = () => {
  const isMobile = useIsMobile()
  const imageColumn = (
    <Lottie animationData={InnovationAnimation} loop={true} style={isMobile ? { width: '100%' } : { width: '80%' }} />
  )

  const gridItems = isMobile ? [textColumn, imageColumn] : [imageColumn, textColumn]
  return (
    <div>
      <Grid
        container
        columnSpacing="6%"
        marginTop="2%"
        display="flex"
        justifyContent="center"
        style={isMobile ? { marginBottom: '24px' } : {}}>
        <Grid item xs={12} sm={5}>
          {gridItems[0]}
        </Grid>
        <Grid
          item
          xs={12}
          sm={7}
          sx={{ textAlign: { xs: 'center', sm: 'left' }, display: 'flex', alignItems: 'center' }}>
          {gridItems[1]}
        </Grid>
      </Grid>
    </div>
  )
}
