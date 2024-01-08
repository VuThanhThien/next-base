import { useEffect } from 'react'

import { theme } from '@/config/theme'
import { Button, styled } from '@mui/material'
const StyledButton = styled(Button)(() => ({
  borderColor: 'transparent',
  backgroundColor: theme.palette.primary.main + '!important',
  borderRadius: '8px',
  color: theme.palette.info.main,
  width: '100%',
  marginTop: '8px',
  ':hover': {
    borderColor: theme.palette.primary.main,
    backgroundColor: theme.palette.info.main + '!important',
    color: theme.palette.primary.main,
  },
}))
export const PrintResume = () => {
  useEffect(() => {
    globalThis?.addEventListener('beforeprint', () => {
      globalThis.document.title = `Resume_Builder_${Date.now()}`
    })

    globalThis?.addEventListener('afterprint', () => {
      globalThis.document.title = 'Single Page Resume Builder'
    })
  }, [])

  return (
    <StyledButton onClick={globalThis?.print} variant="outlined">
      Download as PDF
    </StyledButton>
  )
}
