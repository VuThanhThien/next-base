import { Button, styled } from '@mui/material'

export const StyledButton = styled(Button)(({ theme }) => ({
  color: theme.palette.primary.main,
  borderColor: 'transparent',
  borderRadius: '8px',
  ':hover': {
    borderColor: theme.palette.info.main,
    color: theme.palette.info.main,
    backgroundColor: theme.palette.primary.main,
  },
}))
