import { Box, Button, Typography } from '@mui/material'
import { AnimatePresence, motion } from 'framer-motion'
import { FC } from 'react'

type Props = {
  faq: {
    question: string
    answer: string
  }
  index: number
  activeIndex: number | null
  toggleAnswer: (index: number) => void
}

export const CalculatorPageFAQItem: FC<Props> = ({ faq, index, activeIndex, toggleAnswer }) => {
  return (
    <Box
      key={faq.question}
      sx={{
        border: '1px solid var(--neutral-600, #EAEBF0)',
        borderRadius: '8px',
      }}>
      <Button
        sx={{
          width: '100%',
          height: '100%',
          flexDirection: 'column',
          alignItems: 'flex-start',
          textTransform: 'none',
          textAlign: 'left',
        }}
        onClick={() => toggleAnswer(index)}>
        <Box marginX="3%" marginY="1%">
          <Typography variant="body1" fontWeight="bold">
            {faq.question}
          </Typography>
          <AnimatePresence>
            {activeIndex === index && (
              <motion.p
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ type: 'spring', duration: 0.5 }}>
                <Typography variant="body1" color="var(--gray-50, #5F6D7E)" marginTop="10px">
                  {faq.answer}
                </Typography>
              </motion.p>
            )}
          </AnimatePresence>
        </Box>
      </Button>
    </Box>
  )
}
