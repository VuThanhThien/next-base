import { Box } from '@mui/material'
import styled from 'styled-components'

export const CalendarStepContainer = styled(Box)(({ property }) => ({
  padding: 0,
  position: 'relative',
  display: 'grid',
}))

export const TimePickerHeader = styled('div')({
  fontWeight: '$medium',
  textAlign: 'center',
  paddingBottom: '18px',
})
