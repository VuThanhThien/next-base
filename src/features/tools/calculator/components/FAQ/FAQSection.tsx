import { theme } from '@/config/theme'
import { CalculatorPageFAQItem } from '@/features/tools/calculator/components/FAQ/FAQItem'
import { Box, Typography } from '@mui/material'
import { FC, useState } from 'react'

type Props = {}

type FAQItem = {
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    question: 'What is gross salary ?',
    answer:
      'Gross salary is the total amount of money that an employee receives before deductions for taxes, insurance, allowances, and other expenses. This is the amount typically discussed during salary negotiations and stated in the employment contract.',
  },
  {
    question: 'What is net salary ?',
    answer:
      '"Net salary" refers to the actual income received by an employee after deducting various contributions, personal income tax, and other allowable deductions. Net salary is typically lower than the gross salary due to the deduction of taxes and fees.',
  },
  {
    question: 'What is the formula to calculate Gross salary ?',
    answer:
      'Gross salary = Base salary + Bonuses + Personal income tax + Social insurance + Health insurance + Unemployment insurance + Other expenses',
  },
  {
    question: 'What is the formula to calculate Net salary ?',
    answer:
      'Net salary = Total income - (Personal income tax + Social insurance + Health insurance + Unemployment insurance + Other deductions)',
  },
  {
    question: 'What is the formula to convert Gross salary to Net salary ?',
    answer:
      'Net salary = Gross salary - (Personal income tax + Social insurance + Health insurance + Unemployment insurance + Other deductions)',
  },
  {
    question: 'What is the formula to convert Gross salary to Net salary ?',
    answer:
      'Gross salary = Net salary + Personal income tax + Social insurance + Health insurance + Unemployment insurance + Other expenses.',
  },
  {
    question: 'What should we deal ? Net or Gross salary?',
    answer:
      'You should divide the gross salary to clearly identify the monthly payments such as: social insurance, health insurance, unemployment insurance, personal income tax and union fund (if any). However, it is also important to understand that, no matter what kind of salary you evaluate with the employer, the employer will also calculate the amount to be paid to you equally.',
  },
]
export const CalculatorPageFAQ: FC<Props> = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const toggleAnswer = (index: number) => {
    if (activeIndex === index) {
      setActiveIndex(null)
    } else {
      setActiveIndex(index)
    }
  }
  return (
    <Box marginTop="64px" textAlign="left" width="100%">
      <Typography variant="h2" textAlign="center" fontWeight="bold" color={theme.palette.primary.main}>
        Frequently Asked Questions (FAQs)
      </Typography>
      <Box marginTop="32px">
        {faqs.map((faq, index) => (
          <CalculatorPageFAQItem
            faq={faq}
            index={index}
            activeIndex={activeIndex}
            toggleAnswer={toggleAnswer}
            key={faq.question}
          />
        ))}
      </Box>
    </Box>
  )
}
