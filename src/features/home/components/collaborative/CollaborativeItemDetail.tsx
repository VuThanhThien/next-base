import DownIcon from '@/assets/images/DownIcon.png'
import UpIcon from '@/assets/images/UpIcon_.png'
import { theme } from '@/config/theme'
import { Box, Button, Typography } from '@mui/material'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import { FC } from 'react'
type Props = {
  data: CollaborativeItemDetailType
  index: number
  activeIndex?: number
  toggleAnswer: any
}

export type CollaborativeItemDetailType = { name: string; summary: string }

export const CollaborativeItemDetail: FC<Props> = ({ data, index, activeIndex, toggleAnswer }) => {
  const isActive = activeIndex === index
  return (
    <>
      <Box
        key={data.name}
        sx={{
          borderRadius: '8px',
          marginBottom: '2%',
          paddingInline: '10%',
        }}>
        <Button
          sx={{
            width: '100%',
            height: '100%',
            flexDirection: 'column',
            alignItems: 'flex-start',
            textTransform: 'none',
            textAlign: 'left',
            borderBottom: '1px dashed #797979',
          }}
          onClick={() => toggleAnswer(index)}>
          <Box display="flex" justifyContent="space-between" width="100%">
            <Typography variant="h4" fontWeight={theme.typography.fontWeightRegular} color={theme.palette.primary.main}>
              {data.name}
            </Typography>
            <Image src={isActive ? UpIcon : DownIcon} alt="arrow" />
          </Box>
          <AnimatePresence>
            {isActive && (
              <motion.p
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ type: 'spring', duration: 0.5 }}>
                <Typography fontSize="16px" color="var(--gray-50, #5F6D7E)" paddingTop="10px">
                  {data.summary}
                </Typography>
              </motion.p>
            )}
          </AnimatePresence>
        </Button>
      </Box>
    </>
  )
}
