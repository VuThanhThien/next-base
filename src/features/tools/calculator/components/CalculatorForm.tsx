import { CommonButton } from '@/components/CommonButton'
import { Form } from '@/components/form/Form'
import { linearGradientColor, theme } from '@/config/theme'
import { ConvertTypesEnum } from '@/features/tools/calculator/components/inputs/ConvertTypeSelector'
import { CurrencySelector } from '@/features/tools/calculator/components/inputs/CurrencySelector'
import { SalaryInput } from '@/features/tools/calculator/components/inputs/SalaryInput'
import { Box, Grid, Typography, styled, useMediaQuery } from '@mui/material'
import { motion } from 'framer-motion'
import { FC, useCallback, useState } from 'react'
import { z } from 'zod'

export type CalculatorInputsFormType = {
  salary: number
  currency: string
  convertType: ConvertTypesEnum
}

const Title = styled(Typography)`
  margin-bottom: 32px !important;
  text-align: center;
`

type Props = {
  onSubmit: (inputs: CalculatorInputsFormType) => void
  setIsReCalculate: any
}

export const CalculatorForm: FC<Props> = ({ onSubmit, setIsReCalculate }) => {
  const [isCategoryGtn, setIsCategoryGtn] = useState<boolean | null>(null)
  const schema = z.object({
    salary: z.string().min(1, 'Please enter salary!'),
    currency: z.string().min(1, 'Please select currency!'),
  })

  const isScreenSizeGreaterThanSm = useMediaQuery(theme.breakpoints.up('sm'))
  const handleSubmit = useCallback((data: CalculatorInputsFormType, isCategoryGtn: boolean | null) => {
    const submitData: CalculatorInputsFormType = {
      salary: data.salary,
      currency: data.currency,
      convertType: isCategoryGtn ? ConvertTypesEnum.gtn : ConvertTypesEnum.ntg,
    }
    setIsReCalculate(false)
    window.scrollTo({ top: 600, behavior: 'smooth' })
    onSubmit(submitData)
  }, [])

  return (
    <Box width="100%">
      <Box display="flex" flexDirection="column" alignItems="center">
        <Title variant="h1" fontWeight={theme.typography.fontWeightBold} color={theme.palette.primary.main}>
          Gross-net calculator
        </Title>
        <Typography
          variant="h3"
          maxWidth="1216px"
          color={theme.palette.primary.main}
          textAlign="center"
          marginTop="20px"
          marginBottom="40px">
          Always accurate and up-to-date, 8seneca's unique employee cost calculator helps businesses estimate the total
          cost of employing staff in different countries.
        </Typography>
      </Box>
      <Box>
        <Form<CalculatorInputsFormType, typeof schema>
          onSubmit={(data: CalculatorInputsFormType) => handleSubmit(data, isCategoryGtn)}
          schema={schema}
          options={{
            defaultValues: {},
          }}>
          {({ setValue }) => (
            <Box display="flex" flexDirection="column">
              <Grid container spacing={6} justifyContent="center">
                <Grid item xs={12} sm={6} minWidth="290px">
                  <CurrencySelector />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <SalaryInput setValue={setValue} />
                </Grid>
              </Grid>
              <Grid container marginTop={4} spacing={12} justifyContent="center">
                <Grid item xs={12} sm={6}>
                  <Box
                    display="flex"
                    sx={isScreenSizeGreaterThanSm ? { justifyContent: 'flex-end' } : { justifyContent: 'center' }}>
                    <motion.div whileHover={{ scale: 1.1 }}>
                      <CommonButton
                        type="submit"
                        customStyle={{ height: '40px', background: linearGradientColor }}
                        onClick={() => {
                          setIsCategoryGtn(true)
                        }}>
                        <Typography variant="h4" fontSize="15px" color={theme.palette.info.main} textTransform="none">
                          Calculate from Gross to Net
                        </Typography>
                      </CommonButton>
                    </motion.div>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Box
                    display="flex"
                    sx={isScreenSizeGreaterThanSm ? { justifyContent: 'flex-start' } : { justifyContent: 'center' }}>
                    <motion.div whileHover={{ scale: 1.1 }}>
                      <CommonButton
                        type="submit"
                        customStyle={{ background: linearGradientColor, height: '40px' }}
                        onClick={() => {
                          setIsCategoryGtn(false)
                        }}>
                        <Typography variant="h4" fontSize="15px" color={theme.palette.info.main} textTransform="none">
                          Calculate from Net to Gross
                        </Typography>
                      </CommonButton>
                    </motion.div>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          )}
        </Form>
      </Box>
    </Box>
  )
}
