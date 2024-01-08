import { linearGradientColor, theme } from '@/config/theme'
import { Box, Typography, styled } from '@mui/material'
import { motion } from 'framer-motion'
import { FC } from 'react'

type Props = {
  label: string
  desc: string
  isActive: boolean
  handleOnClick: () => void
}

const Wrapper = styled('div')({
  borderRadius: '16px',
  textAlign: 'left',
  marginBottom: '5%',
})

export const CollaborativeButton: FC<Props> = ({ label, desc, isActive, handleOnClick }) => {
  return (
    <motion.button
      onClick={handleOnClick}
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.2, loop: Infinity, ease: 'easeInOut' },
      }}
      style={{ width: '80%' }}>
      <Wrapper
        sx={
          isActive
            ? {
                background: linearGradientColor,
                boxShadow: '0px 20px 24px 0px rgba(24, 30, 84, 0.20)',
              }
            : {
                background: '#FFF',
                boxShadow: '1px 15px 23px 0px rgba(229, 229, 229, 0.25)',
                border: '1px solid #EFEFEF',
              }
        }>
        <Box paddingX="20px" paddingY="24px" onClick={() => {}}>
          <Typography
            variant="h3"
            fontWeight={theme.typography.fontWeightBold}
            color={isActive ? theme.palette.info.main : theme.palette.primary.main}>
            {label}
          </Typography>
          <Typography
            variant="h4"
            fontWeight={theme.typography.fontWeightRegular}
            marginTop="12px"
            color={isActive ? theme.palette.info.main : theme.palette.primary.main}>
            {desc}
          </Typography>
        </Box>
      </Wrapper>
    </motion.button>
  )
}
