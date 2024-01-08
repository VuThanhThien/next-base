import { Box, CircularProgress, CircularProgressProps, styled } from '@mui/material'
import { FC } from 'react'

const BoxSC = styled(Box)({
  display: 'flex',
  justify: 'center',
  align: 'center',
  height: '100vh',
})
export const Spinner: FC<CircularProgressProps> = props => {
  return (
    <BoxSC>
      <CircularProgress {...props} />
    </BoxSC>
  )
}
