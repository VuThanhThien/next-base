import { theme } from '@/config/theme'
import { useMediaQuery } from '@mui/material'

export const useIsMobile = () => {
  return useMediaQuery(theme.breakpoints.down('sm'))
}
