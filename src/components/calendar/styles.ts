import { Typography, styled } from '@mui/material'

export const CalendarHeader = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingBottom: '20px',
})

export const CalendarTitle = styled(Typography)({
  fontWeight: '$medium',
  textTransform: 'capitalize',
  span: {
    color: '$gray200',
  },
})

export const CalendarActions = styled('div')({
  display: 'flex',
  gap: '$2',
  color: '$gray200',
  paddingRight: '24px',

  button: {
    all: 'unset',
    cursor: 'pointer',
    lineHeight: 0,

    svg: {
      with: '$5',
      height: '$5',
    },

    '&:hover': {
      color: '$gray100',
    },

    '&:focus': {
      boxShadow: '0 0 0 2px $colors$gray100',
    },
  },
})

export const CalendarBody = styled('table')({
  marginBlock: 12,
})
