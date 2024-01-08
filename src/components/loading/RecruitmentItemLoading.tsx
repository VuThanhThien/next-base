import { Grid } from '@mui/material'
import { FC } from 'react'
import Skeleton from 'react-loading-skeleton'
import styled from 'styled-components'

type Props = {}

const Wrapper = styled('div')({
  paddingLeft: '80px',
  paddingRight: '80px',
})
export const RecruitmentItemLoading: FC<Props> = () => {
  return (
    <Wrapper>
      <Grid container paddingTop="64px" spacing="64px" paddingBottom="128px" paddingX="auto">
        {Array(4)
          .fill(0)
          .map(arr => (
            <Grid key={arr} item xs={12} sm={6} md={6} lg={6}>
              <Skeleton height="172px" width="276px" borderRadius="10px" />
            </Grid>
          ))}
      </Grid>
    </Wrapper>
  )
}
