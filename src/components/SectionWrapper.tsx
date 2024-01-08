import { Box } from '@mui/material'
import { FC } from 'react'

type Props = {
  children: any
  customStyle?: React.CSSProperties | undefined
}

export const SectionWrapper: FC<Props> = ({ children, customStyle }) => {
  return <Box sx={{ paddingInline: { xs: '5%', sm: '10%' }, marginTop: '48px', ...customStyle }}>{children}</Box>
}
