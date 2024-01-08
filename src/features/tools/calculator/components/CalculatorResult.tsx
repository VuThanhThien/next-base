import { CommonButton } from '@/components/CommonButton'
import { linearGradientColor, theme } from '@/config/theme'
import { ConvertTypesEnum } from '@/features/tools/calculator/components/inputs/ConvertTypeSelector'
import { NetSalaryResult } from '@/features/tools/calculator/components/result/CalculatedSalaryResult'
import { EmployeeCostResult } from '@/features/tools/calculator/components/result/EmployeeCostResult'
import { calculateEmploymentCost } from '@/utils/calculateEmploymentCost'
import { calculateGrossSalary, calculateNetSalary } from '@/utils/calculateSalary'
import { Box, Grid, Typography } from '@mui/material'
import { FC, useMemo } from 'react'
import { CalculatorInputsFormType } from './CalculatorForm'

type Props = {
  inputs: CalculatorInputsFormType
  onReCalculate: () => void
  currenciesRate: any
}
export const Currencies = {
  VND: {
    label: 'VND',
    symbol: '₫',
  },
  USD: {
    label: 'USD',
    symbol: '$',
  },
  EUR: {
    label: 'EUR',
    symbol: '€',
  },
  SGD: {
    label: 'SGD',
    symbol: 'SGD $',
  },
}

export const CalculatorResult: FC<Props> = ({ inputs, onReCalculate, currenciesRate }) => {
  const rate = currenciesRate?.[inputs.currency]
  const vndSalary = inputs.salary / rate
  const isGrossToNet = inputs.convertType === ConvertTypesEnum.gtn
  const convertedSalary = isGrossToNet
    ? calculateNetSalary(vndSalary, inputs.currency, rate)
    : calculateGrossSalary(vndSalary, inputs.currency, rate)

  const employmentCostAmountInput = useMemo(() => {
    if (isGrossToNet) {
      return Number(inputs.salary) / rate
    } else {
      return Number(convertedSalary.calculatedSalary) / rate
    }
  }, [inputs, isGrossToNet])

  const employmentCost = calculateEmploymentCost(employmentCostAmountInput, inputs.currency, rate)

  return (
    <Box mt={12}>
      <Grid container spacing={6} sx={{ flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'center' }}>
        <Grid item xs={12} sm={12} md={6}>
          <EmployeeCostResult inputs={inputs} data={employmentCost} />
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <NetSalaryResult inputs={inputs} data={convertedSalary} />
        </Grid>
      </Grid>
      <Box width="100%" display="flex" justifyContent="center">
        <CommonButton customStyle={{ background: linearGradientColor, marginTop: '64px' }} onClick={onReCalculate}>
          <Typography variant="h4" fontSize="15px" color={theme.palette.info.main} textTransform="none">
            ReCalculate
          </Typography>
        </CommonButton>
      </Box>
    </Box>
  )
}
