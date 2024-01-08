import { theme } from '@/config/theme'
import { Box, Grid, useMediaQuery } from '@mui/material'
import Skeleton from 'react-loading-skeleton'

export const RecruitmentDetailLoading = () => {
  const matches = useMediaQuery(theme.breakpoints.up('sm'))

  return (
    <Box padding={8} display="flex" flexDirection="column" textAlign="center" sx={{ width: '100%' }}>
      <Box width={matches ? '50%' : '100%'} sx={{ marginInline: 'auto', marginBottom: 10 }}>
        <Skeleton />
        <Skeleton count={1} width={'50%'} />
      </Box>
      <Grid container spacing={15}>
        <Grid item xs={12} sm={7}>
          <Box sx={{ width: '100%' }}>
            <Skeleton width="50%" count={1} style={{ float: 'left', marginBottom: 10 }} />
            <Skeleton width="100%" count={10} />

            <Skeleton width="50%" count={1} style={{ float: 'left', marginTop: 50, marginBottom: 10 }} />
            <Skeleton width="100%" count={10} />
          </Box>
        </Grid>
        <Grid item xs={0} sm={5}>
          <Skeleton style={{ width: '100%' }} height={150} />
        </Grid>
      </Grid>
    </Box>
  )
}
