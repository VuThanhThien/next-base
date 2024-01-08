import { Box, Grid } from '@mui/material'
import Skeleton from 'react-loading-skeleton'
import styled from 'styled-components'

const Wrapper = styled('div')({
  paddingLeft: '10%',
  paddingRight: '10%',
  paddingTop: '148px',
})
export const RecruitmentLoading = () => {
  return (
    <Wrapper>
      <Box>
        <Skeleton height="28px" />
        <Skeleton width={800} count={2} />
      </Box>
      <Grid container spacing="131px" paddingTop="6%">
        {Array(3)
          .fill(0)
          .map(contentButton => (
            <Grid item xs={12} sm={12} md={12} lg key={contentButton}>
              <Skeleton height="196px" borderRadius="20px" />
            </Grid>
          ))}
        {Array(3)
          .fill(0)
          .map(contentButton => (
            <Box paddingTop="11%" key={contentButton}>
              <Skeleton count={2} />
            </Box>
          ))}
        <Skeleton height="28px" />
        <Grid container marginTop="6%" spacing="64px" paddingBottom="11%" paddingX="auto">
          {Array(4)
            .fill(0)
            .map(arr => (
              <Grid key={arr} item xs={12} sm={6} md={6} lg={6}>
                <Skeleton height="172px" borderRadius="10px" />
              </Grid>
            ))}
        </Grid>
      </Grid>
      <Skeleton height="520px" borderRadius="16px" />
    </Wrapper>
  )
}
