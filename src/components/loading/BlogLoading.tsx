import { Box, Grid } from '@mui/material'
import Skeleton from 'react-loading-skeleton'

export const BlogLoading = () => {
  return (
    <Box component="div" textAlign="center" display="flex" flexDirection="column" alignItems="center" width="100%">
      <Grid container spacing="40px">
        <Grid item xs={12} sm={12} md={6} lg={6} marginLeft="auto" marginRight="auto">
          <Box>
            <Skeleton height="210px" borderRadius="10px" />
            <Box component="div" className="pt-6" textAlign="left">
              <Skeleton count={5} />
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          {Array(3)
            .fill(0)
            .map(arr => (
              <Box key={arr}>
                <Grid container spacing={['24px']}>
                  <Grid item xs={5}>
                    <Skeleton width="100%" height="80%" borderRadius="10px" />
                  </Grid>
                  <Grid item xs={7}>
                    <Box component="div" className="text-left">
                      <Skeleton count={4} />
                      <Box display="flex" marginTop="6%">
                        <Skeleton count={1} />
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            ))}
        </Grid>
      </Grid>
      <Skeleton width={600} height="40px" />
      <Grid container spacing="32px" maxWidth="1280px" paddingTop="64px">
        {Array(6)
          .fill(0)
          .map((arr, index) => (
            <Grid key={arr} item xs={12} sm={4}>
              <Box>
                <Skeleton height="120px" borderRadius="10px" />
                <Skeleton count={4} />
              </Box>
            </Grid>
          ))}
      </Grid>
    </Box>
  )
}
